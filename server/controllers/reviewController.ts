const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const updateDeviceRating = require('../utils/updateDeviceRating');

class ReviewController {
    async createReview(req: any, res: any) {
        const {id} = req.user;
        const {deviceId, rate, comment} = req.body;

        try {
            const review = await prisma.review.create({
                data: {
                    rate,
                    comment,
                    User: {connect: {id}},
                    Device: {connect: {id: deviceId}},
                }
            });

            await updateDeviceRating(deviceId);

            return res.json(review);
        } catch (err) {
            console.error(err);
            return res.status(500).json({message: "Ошибка на сервере"})
        }
    }

    async getReviews(req: any, res: any) {
        const {deviceId} = req.params;

        try {
            const reviews = await prisma.review.findMany({
                where: {
                    deviceId: deviceId
                },
                include: {
                    User: true,
                    Device: true
                }
            })

            return res.json(reviews);
        } catch (err) {
            console.error(err);
            return res.status(500).json({message: "Ошибка на сервере"})
        }
    }
    async deleteReview(req: any, res: any) {
        const reviewId = req.params.id;
        const userId = req.user.id;
        const isAdmin = req.user.role === 'Admin';

        try {
            const review = await prisma.review.findUnique({
                where: {
                    id: reviewId
                }
            })
            if (!review) {
                return res.status(404).json({message: 'Отзыв не найден'})
            }

            if (review.userId !== userId && !isAdmin) {
                return res.status(403).json({message: 'У вас нет прав'})
            }

            await prisma.review.delete({
                where: {id: reviewId}
            })

            await updateDeviceRating(review.deviceId);

            return res.json({success: true})

        } catch (err) {
            return res.status(404).json({message: "Ошибка все плохо йоооу"})
        }
    }
}

module.exports = new ReviewController();