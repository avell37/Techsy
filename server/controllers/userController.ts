const ApiError = require('../error/apiError');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const generateJWT = require('../utils/generateJWT');

class UserController {
    async getUser(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const { id, username, email, role, picture } = req.user;

            const token = generateJWT(id, username, email, role, picture)
            return res.json({ token })
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'));
        }
    }

    async getUserData(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const { id } = req.user;

            const user = await prisma.user.findUnique({
                where: { id },
                select: {
                    favorites: true,
                    reviews: {
                        orderBy: { 
                            createdAt: 'desc' 
                        },
                        select: {
                            id: true,
                            rate: true,
                            comment: true,
                            createdAt: true,
                            updatedAt: true,
                            Device: {
                                select: {
                                    id: true,
                                    name: true,
                                    img: true,
                                }
                            },
                            userId: true
                        }
                    }
                }
            })

            return res.json(user)
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'));
        }
    }

    async toggleFavorite(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Пользователь не авторизован'))
            }

            const {deviceId} = req.body;
            if (!deviceId) {
                return next(ApiError.badRequest('Не указан deviceId'))
            }

            const userId = req.user.id;

            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: { favorites: true }
            })

            if (!user) {
                return next(ApiError.notFound('Пользователь не найден'))
            }

            const isFavorite = user.favorites.some((device: any) => device.id === deviceId);
            let device;

            if (isFavorite) {
                await prisma.user.update({
                    where: { id: userId },
                    data: {
                        favorites: {
                            disconnect: { id: deviceId }
                        }
                    },
                    select: { favorites: true }
                });
                device = user.favorites.find((device: any) => device.id === deviceId);
            } else {
                const updatedUser = await prisma.user.update({
                    where: { id: userId },
                    data: {
                        favorites: {
                            connect: { id: deviceId }
                        }
                    },
                    select: { favorites: true }
                })
                device = updatedUser.favorites.find((device: any) => device.id === deviceId)
            }

            return res.json({
                device,
                added: !isFavorite
            })

        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'));
        }
    }

    async changeUsername(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }

            const { id, role } = req.user;
            const { username } = req.body;

            if (!username) {
                return next(ApiError.badRequest('Поле не может быть пустым'));
            }

            const updatedUser = await prisma.user.update({
                where: { id },
                data: { username }
            })

            const token = generateJWT(id, updatedUser.username, updatedUser.email, role, updatedUser.picture)
            return res.json({ token });
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'));
        }
    }

    async changeEmail(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const { id, role } = req.user;
            const { email } = req.body;

            if (!email) {
                return next(ApiError.badRequest('Поле не может быть пустым'));
            }
            const isExistingEmail = await prisma.user.findUnique({ where: { email } });
            if (isExistingEmail) {
                return next(ApiError.badRequest('Email адрес уже занят.'))
            }

            const updatedUser = await prisma.user.update({
                where: { id },
                data: { email }
            })

            const token = generateJWT(id, updatedUser.username, updatedUser.email, role, updatedUser.picture)
            return res.json({ token });
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'));
        }
    }

    async changePassword(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const userId = req.user.id;
            const { oldPassword, newPassword } = req.body;

            if (!oldPassword || !newPassword) {
                return next(ApiError.badRequest('Поля не могут быть пустыми'));
            }

            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (!user) {
                return next(ApiError.notFound('Пользователь не найден'));
            }

            const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
            if (!isPasswordValid) {
                return next(ApiError.badRequest('Неверный старый пароль'));
            }
            const hashNewPassword = await bcrypt.hash(newPassword, 4);
            const updatedUser = await prisma.user.update({
                where: { id: userId },
                data: { password: hashNewPassword }
            })
            const token = generateJWT(updatedUser.id, updatedUser.username, updatedUser.email, updatedUser.role, updatedUser.picture)
            return res.json({ token });
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'));
        }
    }

    async uploadAvatar(req: any, res: any, next: any) {
        if (!req.user) {
            return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
        }
        const newAvatar = req.file.filename;
        const userId = req.user.id;
        if (!req.file) {
            return next(ApiError.badRequest('Файл не загружен'))
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { picture: newAvatar }
        })

        const token = generateJWT(updatedUser.id, updatedUser.username, updatedUser.email, updatedUser.role, updatedUser.picture)
        return res.json({ token });
    }

    async getShippingInfo(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const userId = req.user.id;
            const info = await prisma.shippingInfo.findUnique({ where: { userId } });
            if (!info) {
                return next(ApiError.notFound('Информация об адресе доставки не найдена.'))
            }
            return res.json(info);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async saveShippingInfo(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const userId = req.user.id;
            const { firstName, lastName, phone, country,
                region, zipCode, city, address } = req.body;

            const requiredFields = {
                firstName, lastName, phone,
                country, region, zipCode,
                city, address
            };

            const missingFields = Object.entries(requiredFields)
                .filter(([_, value]) => !value)
                .map(([key]) => key);

            if (missingFields.length > 0) {
                return next(ApiError.badRequest(
                    `Отсутствуют обязательные поля: ${missingFields.join(', ')}`
                ));
            }

            const existing = await prisma.shippingInfo.findUnique({ where: { userId } })

            if (existing) {
                const updated = await prisma.shippingInfo.update({
                    where: { userId },
                    data: { firstName, lastName, phone, country, region, zipCode, city, address }
                })
                return res.json(updated);
            } else {
                const created = await prisma.shippingInfo.create({
                    data: {
                        firstName, lastName, phone, country, region, zipCode, city, address,
                        user: { connect: { id: userId } }
                    }
                })
                return res.json(created);
            }
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }
}

module.exports = new UserController();