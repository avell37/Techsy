const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ApiError = require('../error/apiError');

async function updateDeviceRating(deviceId: string, next: any) {
    try {
        const avgRating = await prisma.review.aggregate({
            where: { deviceId },
            _avg: {
                rate: true
            }
        })

        const newRating = avgRating._avg.rate !== null ? Math.round(avgRating._avg.rate) : 0;

        await prisma.device.update({
            where: { id: deviceId },
            data: {
                rating: newRating
            }
        })
    } catch (err) {
        return next(ApiError.internal('Ошибка. Попробуйте еще раз.'))
    }
}

module.exports = updateDeviceRating;