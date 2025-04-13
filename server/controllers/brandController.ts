const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class BrandController {
    async create(req: any, res: any) {
        const {name} = req.body;
        const brand = await prisma.brand.create({
            data: {name}
        })
        return res.json(brand);
    }

    async getAll(req: any, res: any) {
        const brands = await prisma.brand.findMany()
        return res.json(brands);
    }

    async getOne(req: any, res: any) {
        const {id} = req.params;
        const brand = await prisma.brand.findUnique({
            where: {
                id
            }
        })
        return res.json(brand);
    }
}

module.exports = new BrandController();