const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

const generateJWT = (username: string, email: string, picture: string, role: string = 'User') => {
    return jwt.sign(
        {username, email, role, picture},
        process.env.JWT_SECRET_KEY,
        {expiresIn: "24h"}
    )
}

class UserController {
    async registration(req: any, res: any) {
        const {username, email, password, role} = req.body;
        const avatar = 'http://localhost:4000/default-user.png'
        const registrated = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (registrated) {
            return res.json('Ты зареган, ты чего хоть')
        }
        const hashPassword = await bcrypt.hash(password, 4)
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashPassword,
                picture: avatar,
                role
            }
        })
        const basket = await prisma.basket.create({
            data: {
                userId: user.id
            }
        })
        const token = generateJWT(user.username, user.email, user.avatar, user.role)
        return res.json({token})
    }
    
    async login(req: any, res: any) {
        const {email, password} = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            return res.json('Пользователя с таким e-mail адресом не существует')
        }
        const comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return res.json('Неверно указан пароль')
        }
        const token = generateJWT(user.username, user.email, user.avatar, user.role)
        return res.json({token});
    }

    async check(req: any, res: any) {
        const token = generateJWT(req.user.username, req.user.email, req.user.avatar, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController();