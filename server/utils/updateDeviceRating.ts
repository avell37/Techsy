const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function updateDeviceRating(deviceId: string) {
    const avgRating = await prisma.review.aggregate({
        where: {deviceId},
        _avg: {
            rate: true
        }
    })

    const newRating = avgRating._avg.rate !== null ? Math.round(avgRating._avg.rate) : 0;

    await prisma.device.update({
        where: {id: deviceId},
        data: {
            rating: newRating
        }
    })
}

module.exports = updateDeviceRating;