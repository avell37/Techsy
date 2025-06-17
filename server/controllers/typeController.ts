const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ApiError = require('../error/apiError');

class TypeController {
    async create(req: any, res: any, next: any) {
        try {
            const { name } = req.body;
            if (!name) {
                return next(ApiError.badRequest('Название типа не передано.'))
            }
            const isExisting = await prisma.type.findUnique({ where: { name } })

            if (isExisting) {
                return next(ApiError.badRequest('Данный тип уже существует.'))
            }
            const type = await prisma.type.create({
                data: { name }
            })
            return res.json(type);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async getAll(req: any, res: any, next: any) {
        try {
            const types = await prisma.type.findMany()
            if (!types) {
                return next(ApiError.notFound('Не удалось получить список типов.'))
            }
            return res.json(types);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async getOne(req: any, res: any, next: any) {
        try {
            const { id } = req.params;

            if (!id) {
                return next(ApiError.badRequest('Не найден ID типа'))
            }

            const type = await prisma.type.findUnique({
                where: {
                    id
                }
            })

            if (!type) {
                return next(ApiError.notFound('Тип не найден.'))
            }

            return res.json(type);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async deleteOne(req: any, res: any, next: any) {
        try {
            const { id } = req.params;

            if (!id) {
                return next(ApiError.badRequest('Не передан параметр ID'))
            }

            const deleted = await prisma.type.delete({
                where: { id }
            })

            return res.json({ message: "Тип удален", deleted })
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }
}

module.exports = new TypeController();