const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ApiError = require('../error/apiError');

class BasketController {
    async addToBasket(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const { deviceId } = req.body;
            const userId = req.user.id;

            if (!deviceId) {
                return next(ApiError.badRequest('Не передан ID устройства'))
            }

            let basket = await prisma.basket.findUnique({ where: { userId } })

            if (!basket) {
                basket = await prisma.basket.create({ data: { userId } })
            }

            const basketDevice = await prisma.basketDevice.findUnique({
                where: { basketId_deviceId: { basketId: basket.id, deviceId } }
            })

            if (basketDevice) {
                return next(ApiError.badRequest('Устройство уже в корзине'))
            }

            const newDevice = await prisma.basketDevice.create({
                data: {
                    basketId: basket.id,
                    deviceId,
                    quantity: 1
                }
            });

            return res.json(newDevice);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async incrementDevice(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const { deviceId } = req.body;
            const userId = req.user.id;

            if (!deviceId) {
                return next(ApiError.badRequest('Не передан ID устройства'))
            }

            const basket = await prisma.basket.findUnique({ where: { userId } })

            if (!basket) {
                return next(ApiError.notFound('Корзина не найдена'))
            }

            const updated = await prisma.basketDevice.update({
                where: {
                    basketId_deviceId: {
                        basketId: basket.id,
                        deviceId
                    }
                },
                data: {
                    quantity: { increment: 1 }
                }
            });

            return res.json(updated);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async decrementDevice(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const { deviceId } = req.body;
            const userId = req.user.id;

            if (!deviceId) {
                return next(ApiError.badRequest('Не передан ID устройства'))
            }

            const basket = await prisma.basket.findUnique({ where: { userId } })
            if (!basket) {
                return next(ApiError.notFound('Корзина не найдена'))
            }

            const basketDevice = await prisma.basketDevice.findUnique({
                where: { basketId_deviceId: { basketId: basket.id, deviceId } }
            })

            if (!basketDevice || basketDevice.quantity <= 1) {
                return next(ApiError.badRequest('Минимальное количество - 1'))
            }

            const updated = await prisma.basketDevice.update({
                where: { basketId_deviceId: { basketId: basket.id, deviceId } },
                data: { quantity: { decrement: 1 } }
            })

            return res.json(updated);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async getBasket(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const userId = req.user.id;
            const basket = await prisma.basket.findUnique({
                where: { userId },
                include: {
                    BasketDevice: {
                        include: {
                            device: true
                        }
                    }
                }
            })

            return res.json(basket);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }
    async deleteFromBasket(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const { id } = req.params;
            const userId = req.user.id;

            if (!id) {
                return next(ApiError.badRequest('Не указан ID устройства'))
            }

            const basket = await prisma.basket.findUnique({
                where: { userId },
                include: { BasketDevice: true }
            })

            if (!basket) {
                return next(ApiError.notFound('Корзина не найдена'))
            }

            const basketDevice = await prisma.BasketDevice.findFirst({
                where: { deviceId: id, basketId: basket.id }
            })

            if (!basketDevice) {
                return next(ApiError.notFound('Устройство не найдено'))
            }

            const updatedDevice = await prisma.BasketDevice.delete({
                where: { id: basketDevice.id }
            })

            return res.json(updatedDevice)
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }
}

module.exports = new BasketController();