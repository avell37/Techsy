const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ApiError = require('../error/apiError');

class DeviceController {
    async create(req: any, res: any, next: any) {
        try {
            let { name, price, brandId, typeId, info } = req.body;
            const file = req.file;
            if (!name || !price || !brandId || !typeId || !info) {
                return next(ApiError.badRequest('Переданы не все данные.'))
            }
            if (!file) {
                return next(ApiError.badRequest('Файл не загружен'))
            }
            const isExisting = await prisma.device.findUnique({ where: { name } });

            if (isExisting) {
                return next(ApiError.badRequest('Такое устройство уже есть'))
            }

            const device = await prisma.device.create({
                data: {
                    name,
                    price: Number(price),
                    brandId,
                    typeId,
                    img: file.filename,
                }
            });

            if (info) {
                info = JSON.parse(info);
                const deviceInfo = info.map((i: any) => ({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                }));
                await prisma.deviceInfo.createMany({
                    data: deviceInfo
                });
            }

            return res.json(device);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async getAll(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                const devices = await prisma.device.findMany({});
                return res.json(devices);
            }
            const userId = req?.user.id;
            const devices = await prisma.device.findMany({
                include: userId ? {
                    favoriteDevice: {
                        where: { userId },
                        select: { id: true }
                    }
                } : {}
            });

            const favoriteDevices = devices.map((device: typeof devices[number]) => ({
                ...device,
                isFavorite: userId ? device.favoriteDevices.length > 0 : false,
            }));

            return res.json(favoriteDevices)
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async getOne(req: any, res: any, next: any) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.notFound('Не найден ID устройства'))
            }
            const device = await prisma.device.findUnique({
                where: {
                    id
                },
                include: {
                    Brand: true,
                    Type: true,
                    deviceInfo: true
                }
            })
            if (!device) {
                return next(ApiError.notFound('Устройство не найдено'))
            }

            return res.json({
                ...device,
                brand: device.Brand?.name,
                type: device.Type?.name
            });
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async deleteOne(req: any, res: any, next: any) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.notFound('Не найден ID устройства'))
            }
            const deletedFavorite = await prisma.favoriteDevice.deleteMany({
                where: {
                    deviceId: id
                }
            })
            const deleted = await prisma.device.delete({
                where: { id }
            })

            return res.json({ message: "Девайс удален", deleted })
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }
}

module.exports = new DeviceController();