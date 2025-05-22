const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TypeController {
    async create(req: any, res: any) {
        const {name} = req.body;
        const type = await prisma.type.create({
            data: {name}
        })
        return res.json(type);
    }

    async getAll(req: any, res: any) {
        try {
            const types = await prisma.type.findMany()
            return res.json(types);
        } catch (err) {
            return res.status(404).json({message: 'Типы не найдены'})
        }
    }

    async getOne(req: any, res: any) {
        const {id} = req.params;
        const type = await prisma.type.findUnique({
            where: {
                id
            }
        })
        return res.json(type);
    }

    async deleteOne(req: any, res: any) {
        const {id} = req.params;
        try {
            const deleted = await prisma.type.delete({
                where: {id}
            })

            res.json({message: "Тип удален", deleted})
        } catch (err) {
            console.error(err);
            res.status(500).json({error: "Ошибка сервера"})
        }
    }
}

module.exports = new TypeController();