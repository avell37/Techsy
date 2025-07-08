const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const updateDeviceRating = require('../utils/updateDeviceRating');
const ApiError = require('../error/apiError');

class ReviewController {
    async createReview(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const { id } = req.user;
            const { deviceId, rate, comment } = req.body;

            if (!deviceId || !rate || !comment) {
                return next(ApiError.badRequest('Пожалуйста, заполните отзыв и поставьте оценку'))
            }
            const existingReview = await prisma.review.findFirst({
                where: {
                    userId: id,
                    deviceId: deviceId
                }
            });

            if (existingReview) {
                return next(ApiError.badRequest('Вы уже оставляли отзыв на это устройство.'));
            }

            const review = await prisma.review.create({
                data: {
                    rate,
                    comment,
                    User: { connect: { id } },
                    Device: { connect: { id: deviceId } },
                }
            });

            await updateDeviceRating(deviceId);

            return res.json(review);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async getReviews(req: any, res: any, next: any) {
        try {
            const { deviceId } = req.params;

            if (!deviceId) {
                return next(ApiError.notFound('Не найден ID устройства'))
            }

            const reviews = await prisma.review.findMany({
                where: {
                    deviceId: deviceId
                },
                include: {
                    User: {
                        select: {
                            id: true,
                            username: true,
                            picture: true,
                        }
                    },
                    Device: true
                }
            })

            return res.json(reviews);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }
    async deleteReview(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const reviewId = req.params.id;
            const userId = req.user.id;
            const isAdmin = req.user.role === 'Admin';

            if (!reviewId) {
                return next(ApiError.badRequest('Не найден ID устройства'))
            }

            const review = await prisma.review.findUnique({
                where: {
                    id: reviewId
                }
            })
            if (!review) {
                return next(ApiError.notFound('Отзыв не найден.'))
            }

            if (review.userId !== userId && !isAdmin) {
                return next(ApiError.forbidden('У вас нет прав на удаление этого отзыва.'))
            }

            await prisma.review.delete({
                where: { id: reviewId }
            })

            await updateDeviceRating(review.deviceId);

            return res.json({ success: true })
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }
}

module.exports = new ReviewController();