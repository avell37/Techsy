const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ApiError = require('../error/apiError');

async function deleteDeviceCascade(deviceId: string, next: any) {
    const device = await prisma.device.findUnique({ where: { id: deviceId } })
    if (!device) {
        return next(ApiError.notFound('Устройство не найдено.'))
    }

    await prisma.favoriteDevice.deleteMany({ where: { deviceId } })
    await prisma.basketDevice.deleteMany({ where: { deviceId } })
    await prisma.review.deleteMany({ where: { deviceId } })
    await prisma.deviceInfo.deleteMany({ where: { deviceId } })

    const deleted = await prisma.device.delete({ where: { id: deviceId } })
    return deleted;
}

module.exports = deleteDeviceCascade;