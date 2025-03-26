const { PrismaClient } = require('@prisma/client');
const uuid = require('uuid');
const path = require('path');
const prisma = new PrismaClient();

class DeviceController {
    async create(req: any, res: any) {
        const {name, price, brandId, typeId} = req.body;
        const {img} = req.files;
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

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
            }
        })
        return res.json(device);
    }
}

module.exports = new DeviceController();