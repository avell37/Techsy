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
}

module.exports = new BrandController();