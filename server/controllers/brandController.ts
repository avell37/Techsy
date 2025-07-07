const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ApiError = require('../error/apiError');

class BrandController {
    async create(req: any, res: any, next: any) {
        try {
            const { name } = req.body;
            if (!name) {
                return next(ApiError.badRequest('Название бренда не передано.'))
            }
            const isExisting = await prisma.brand.findUnique({ where: { name } });

            if (isExisting) {
                return next(ApiError.badRequest('Данный бренд уже существует.'))
            }

            const brand = await prisma.brand.create({
                data: { name }
            })

            return res.json(brand);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async getAll(req: any, res: any, next: any) {
        try {
            const brands = await prisma.brand.findMany()
            if (!brands) {
                return next(ApiError.notFound('Не удалось получить список брендов.'))
            }
            return res.json(brands);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async getOne(req: any, res: any, next: any) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.notFound('Не найден ID бренда'))
            }
            const brand = await prisma.brand.findUnique({
                where: {
                    id
                }
            })
            if (!brand) {
                return next(ApiError.notFound('Бренд не найден'))
            }
            return res.json(brand);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async deleteOne(req: any, res: any, next: any) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.notFound('Не найден ID бренда'))
            }
            const deleted = await prisma.brand.delete({
                where: { id }
            })

            return res.json({ message: "Бренд удален", deleted })
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }
}

module.exports = new BrandController();