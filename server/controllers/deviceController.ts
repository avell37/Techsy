const { PrismaClient } = require('@prisma/client');
const uuid = require('uuid');
const path = require('path');
const prisma = new PrismaClient();
const fs = require('fs');

class DeviceController {
    async create(req: any, res: any) {
        try {
            let {name, price, brandId, typeId, info} = req.body;
            const file = req.file;
            
            if (!file) {
                return res.status(400).json({ message: "Файл не загружен" });
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
        } catch (error: any) {
            console.error('Error creating device:', error);
            return res.status(500).json({ 
                message: "Ошибка при создании устройства", 
                error: error.message 
            });
        }
    }

    async getAll(req: any, res: any) {
        const userId = req.user?.id;
        
        const devices = await prisma.device.findMany({
            include: userId ? {
                favoriteDevice: {
                    where: {userId},
                    select: {id: true}
                }
            } : {}
        });
        const favoriteDevices = devices.map((device: typeof devices[number]) => ({
            ...device,
            isFavorite: userId ? device.favoriteDevices.length > 0 : false,
        }));

        return res.json(favoriteDevices)
    }

    async getOne(req: any, res: any) {
        const {id} = req.params;
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
        return res.json({
            ...device,
            brand: device.Brand?.name,
            type: device.Type?.name
        });
    }

    async deleteOne(req: any, res: any) {
        const {id} = req.params;
        try {
            const deletedFavorite = await prisma.favoriteDevice.deleteMany({
                where: {
                    deviceId: id
                }
            })
            const deleted = await prisma.device.delete({
                where: {id}
            })

            res.json({message: "Девайс удален", deleted})
        } catch (err) {
            console.error(err);
            res.status(500).json({error: "Ошибка сервера"})
        }
    }
}

module.exports = new DeviceController();