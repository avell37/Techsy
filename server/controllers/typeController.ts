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
        const types = await prisma.type.findMany()
        return res.json(types);
    }
}

module.exports = new TypeController();