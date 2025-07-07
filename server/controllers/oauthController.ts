const generateJWT = require('../utils/generateJWT');
const { OAuth2Client } = require('google-auth-library');
const { PrismaClient } = require('@prisma/client');
const ApiError = require('../error/apiError')

const prisma = new PrismaClient();
const client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "postmessage"
);

class OAuthController {
    async googleAuth(req: any, res: any, next: any) {
        try {
            const { code } = req.body;
            if (!code) {
                return next(ApiError.badRequest('Не найден код для авторизации'))
            }
            const { tokens } = await client.getToken(code);
            client.setCredentials(tokens);

            const ticket = await client.verifyIdToken({
                idToken: tokens.id_token,
                audience: process.env.CLIENT_ID
            })

            const payload = ticket.getPayload();

            const { sub, email, name, picture } = payload;

            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            })
            if (user) {
                const token = generateJWT(user.id, user.username, user.email, user.role, user.picture)
                return res.json({ token });
            }
            else if (!user) {
                const newUser = await prisma.user.create({
                    data: {
                        username: name,
                        email,
                        role: "Admin",
                        picture
                    }
                })

                const basket = await prisma.basket.create({
                    data: {
                        userId: newUser.id
                    }
                })

                const token = generateJWT(
                    newUser.id,
                    newUser.username,
                    newUser.email,
                    'Admin',
                    newUser.picture,
                )

                return res.json({ token });
            }
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }
}

module.exports = new OAuthController();