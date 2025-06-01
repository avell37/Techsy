const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class BasketController {
    async addToBasket(req: any, res: any) {
        const {deviceId} = req.body;
        const userId = req.user.id;

        if (!deviceId || !userId) {
            return res.status(400).json({message: "Не указан ID устройства или пользователя"})
        }

        try {
            let basket = await prisma.basket.findUnique({where: {userId}})

            if (!basket) {
                basket = await prisma.basket.create({data: {userId}})
            }

            const basketDevice = await prisma.basketDevice.findUnique({
                where: { basketId_deviceId: { basketId: basket.id, deviceId}}
            })

            if (basketDevice) {
                return res.status(400).json({message: "Устройство уже в корзине"})
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
            console.error(err);
            return res.status(500).json({message: err})
        }
    }

    async incrementDevice(req: any, res: any) {
        const {deviceId} = req.body;
        const userId = req.user.id;

        const basket = await prisma.basket.findUnique({where: {userId}})
        if (!basket) return res.status(404).json({message: "Корзина не найдена"})

        const updated = await prisma.basketDevice.update({
            where: {
                basketId_deviceId: {
                    basketId: basket.id,
                    deviceId
                }
            },
            data: {
                quantity: {increment: 1}
            }
        });

        return res.json(updated);
    }

    async decrementDevice(req: any, res: any) {
        const {deviceId} = req.body;
        const userId = req.user.id;

        const basket = await prisma.basket.findUnique({where: {userId}})
        if (!basket) return res.status(404).json({message: "Корзина не найдена"})

        const basketDevice = await prisma.basketDevice.findUnique({
            where: {basketId_deviceId: {basketId: basket.id, deviceId}}
        })

        if (!basketDevice || basketDevice.quantity <= 1) {
            return res.status(400).json({message: "Минимальное количество - 1"})
        }

        const updated = await prisma.basketDevice.update({
            where: {basketId_deviceId: {basketId: basket.id, deviceId}},
            data: {quantity: {decrement: 1}}
        })

        return res.json(updated);
    }

    async getBasket(req: any, res: any) {
        const userId = req.user.id;

        if (!userId) {
            return res.status(400).json({message: "Пользователь не авторизирован"})
        }

        try {
            const basket = await prisma.basket.findUnique({
                where: {userId},
                include: {
                    BasketDevice: {include: {
                        device: true
                    }}
                }
            })
        
            return res.json(basket);
        } catch (err) {
            console.log(err);
            return res.status(403).json({message: "Ошибка получения корзины"})
        }
    }
    async deleteFromBasket(req: any, res: any) {
        const {id} = req.params;
        const userId = req.user.id;
        if (!id || !userId) {
            return res.status(403).json({message: "Не указан ID устройства или пользователя"})
        }

        try {
            const basket = await prisma.basket.findUnique({
                where: {userId},
                include: {BasketDevice: true}
            })

            if (!basket) {
                return res.status(404).json({message: "Ошибка"})
            }

            const basketDevice = await prisma.BasketDevice.findFirst({
                where: {deviceId: id, basketId: basket.id}
            })

            if (!basketDevice) {
                return res.status(404).json({message: "Нет девайса"})
            }

            const updatedDevice = await prisma.BasketDevice.delete({
                where: {id: basketDevice.id}
            })

            return res.json(updatedDevice)
        } catch (err) {
            console.log(err);
            return res.status(500).json({message: "Ошибка удаления устройства из корзины"})
        }
    }
}

module.exports = new BasketController();