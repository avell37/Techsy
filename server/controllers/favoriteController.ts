const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();
const ApiError = require('../error/apiError');

class FavoriteController {
    async toggleFavoriteDevice(req: any, res: any, next: any) {
        try {
            const userId = req.user.id;
            const { deviceId } = req.body;

            if (!deviceId) {
                return next(ApiError.badRequest('Не передан ID устройства'))
            }

            const isFavoriteDeviceExists = await prisma.favoriteDevice.findFirst({
                where: {
                    userId,
                    deviceId
                }
            })

            if (isFavoriteDeviceExists) {
                const deleteFavoriteDevice = await prisma.favoriteDevice.deleteMany({
                    where: {
                        userId,
                        deviceId
                    }
                })
                return res.json({ removed: true })
            } else {
                const favoriteDevice = await prisma.favoriteDevice.create({
                    data: {
                        userId,
                        deviceId
                    },
                    include: {
                        device: {
                            include: {
                                Brand: true,
                                Type: true
                            }
                        }
                    }
                })
                return res.json({ added: true, favoriteDevice })
            }
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async getFavoriteDevices(req: any, res: any, next: any) {
        try {
            const userId = req.user.id;
            const favoriteDevices = await prisma.favoriteDevice.findMany({
                where: {
                    userId
                },
                include: {
                    device: {
                        include: {
                            Brand: true,
                            Type: true
                        }
                    }
                }
            });
            return res.json(favoriteDevices);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }
}

module.exports = new FavoriteController();