const ApiError = require('../error/apiError');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client')
const { OAuth2Client } = require('google-auth-library');
const prisma = new PrismaClient();
const generateJWT = require('../utils/generateJWT');
const client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "postmessage"
);

class AuthController {
    async registration(req: any, res: any, next: any) {
        try {
            const { username, email, password, role } = req.body;
            if (!username || !email || !password) {
                return next(ApiError.badRequest('Переданы не все данные.'))
            }
            const candidate = await prisma.user.findUnique({
                where: {
                    email
                }
            })
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email адресом уже существует.'))
            }
            const hashPassword = await bcrypt.hash(password, 4)
            const user = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: hashPassword,
                    role
                }
            })
            const basket = await prisma.basket.create({
                data: {
                    userId: user.id
                }
            })
            const token = generateJWT(user.id, user.username, user.email, user.role)
            return res.json({ token })
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async login(req: any, res: any, next: any) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return next(ApiError.badRequest('Не передана почта и/или пароль'))
            }
            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            })
            if (!user) {
                return next(ApiError.notFound('Пользователя с таким e-mail адресом не существует'))
            }
            const comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                return next(ApiError.badRequest('Неверный пароль'))
            }
            const token = generateJWT(user.id, user.username, user.email, user.role, user.picture)
            return res.json({ token });
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async check(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const { id, username, email, role, picture } = req.user;
            const token = generateJWT(id, username, email, role, picture)
            return res.json({ token })
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

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

module.exports = new AuthController();