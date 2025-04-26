const { PrismaClient } = require('@prisma/client');
const uuid = require('uuid');
const path = require('path');
const prisma = new PrismaClient();
const fs = require('fs');

class DeviceController {
    async create(req: any, res: any) {
        const {name, price, brandId, typeId} = req.body;
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: "Файл не загружен" });
        }
        if (!file.originalname) {
            return res.status(400).json({ message: 'Неверный формат файла' });
        }
        const fileName = uuid.v4() + path.extname(file.originalname);
        const filePath = path.resolve(__dirname, '..', 'uploads', fileName);

        try {
            fs.renameSync(file.path, filePath);
        } catch(err) {
            return res.status(400).json({message: "ОшибОЧКА", error: err})
        }
        const device = await prisma.device.create({
            data: {
                name,
                price: Number(price),
                brandId,
                typeId,
                img: fileName,
            }
        })
        return res.json(device);
    }

    async getAll(req: any, res: any) {
        const devices = await prisma.device.findMany();
        return res.json(devices)
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
}

module.exports = new DeviceController();