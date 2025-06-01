const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

class FavoriteController {
    async toggleFavoriteDevice(req: any, res: any) {
            const {deviceId} = req.body;
            const {id} = req.user;

            const isFavoriteDeviceExists = await prisma.favoriteDevice.findFirst({
                where: {
                    userId: id,
                    deviceId
                }
            })

            if (isFavoriteDeviceExists) {
                const deleteFavoriteDevice = await prisma.favoriteDevice.deleteMany({
                    where: {
                        userId: id,
                        deviceId
                    }
                })
                return res.json({ removed: true })
            } else {
                const favoriteDevice = await prisma.favoriteDevice.create({
                    data: {
                        userId: id,
                        deviceId
                    },
                    include: { device: {include: {
                            Brand: true,
                            Type: true
                        }
                    } }
                })
                return res.json({ added: true, favoriteDevice })
            }
        
    }
    async getFavoriteDevices(req: any, res: any) {
        try {
            const {id} = req.user;
            if (!id) {
                return res.status(404).json({message: 'нет айди юзера'})
            } 
            const favoriteDevices = await prisma.favoriteDevice.findMany({
                where: {
                    userId: id
                },
                include: { device: {include: {
                        Brand: true,
                        Type: true
                    }
                } }
            });
            return res.json(favoriteDevices);
        } catch (err) {
            return res.json({message: "все хуйня"})
        }
    }
}

module.exports = new FavoriteController();