const ApiError = require('../error/apiError');
const bcrypt = require('bcrypt');
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
const generateJWT = require('../utils/generateJWT');

class UserController {
    async registration(req: any, res: any, next: any) {
        const {username, email, password, role} = req.body;
        if (!username || !email || !password) {
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const avatar = 'default-user.png'
        const candidate = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email адресом уже существует'))
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
        const token = generateJWT(user.id, user.username, user.email, user.role, user.picture)
        return res.json({token})
    }
    
    async login(req: any, res: any, next: any) {
        const {email, password} = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            return next(ApiError.badRequest('Пользователя с таким e-mail адресом не существует'))
        }
        const comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Неверный пароль'))
        }
        const token = generateJWT(user.id, user.username, user.email, user.role, user.picture)
        return res.json({token});
    }

    async check(req: any, res: any) {
        const token = generateJWT(req.user.id, req.user.username, req.user.email, req.user.role, req.user.picture)
        return res.json({token})
    }

    async getUserData(req: any, res: any) {
        const token = generateJWT(req.user.id, req.user.username, req.user.email, req.user.role, req.user.picture)
        return res.json({token})
    }

    async changeUserData(req: any, res: any, next: any) {
        try {
            const {id, role} = req.user;
            const {username, email} = req.body

            if (!username || !email) {
                next(ApiError.badRequest('Нет данных'))
            }


            const updatedUser = await prisma.user.update({
                where: {id},
                data: {username, email}
            })

            const token = generateJWT(id, updatedUser.username, updatedUser.email, role, updatedUser.picture)
            return res.json({token});
        } catch (err) {
            next(ApiError.badRequest(err));
        }
    }

    async uploadAvatar(req: any, res: any, next: any) {
        try {
            if (!req.file) {
                res.json({message: 'все плохо'})
            }

            const userId = req.user.id;
            const newAvatar = req.file.filename;

            const updatedUser = await prisma.user.update({
                where: {id: userId},
                data: {picture: newAvatar}
            })

            const token = generateJWT(updatedUser.id, updatedUser.username, updatedUser.email, updatedUser.role, updatedUser.picture)
            return res.json({token});
        } catch (err) {
            next(ApiError.badRequest('все оч плоххо'));
        }
    }

    async getShippingInfo(req: any, res: any) {
        const userId = req.user.id;

        try {
            const info = await prisma.shippingInfo.findUnique({where: {userId}});
            return res.json(info);
        } catch (err) {
            console.log(err);
            return res.status(500).json({message: 'Oshibka'})
        }
    }

    async saveShippingInfo(req: any, res: any) {
        const userId = req.user.id;
        const {firstName, lastName, phone, country, region, zipCode, city, address} = req.body;

        try {
            const existing = await prisma.shippingInfo.findUnique({ where: {userId} })

            if (existing) {
                const updated = await prisma.shippingInfo.update({
                    where: {userId},
                    data: {firstName, lastName, phone, country, region, zipCode, city, address}
                })
                return res.json(updated);
            } else {
                const created = await prisma.shippingInfo.create({
                    data: {firstName, lastName, phone, country, region, zipCode, city, address, 
                        user: { connect: {id: userId} }
                    }
                })
                return res.json(created);
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({message: "Oshibka"})
        }
    }
}

module.exports = new UserController();