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
        try {
            const brands = await prisma.brand.findMany()
            return res.json(brands);
        } catch (err) {
            return res.status(404).json({message: "Бренды не найдены"})
        }
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
    
    async deleteOne(req: any, res: any) {
        const {id} = req.params;
        try {
            const deleted = await prisma.brand.delete({
                where: {id}
            })

            res.json({message: "Бренд удален", deleted})
        } catch (err) {
            console.error(err);
            res.status(500).json({error: "Ошибка сервера"})
        }
    }
}

module.exports = new BrandController();