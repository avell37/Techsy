const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const yooClient = require('../utils/yooClient')
const uuid = require('uuid');
const ApiError = require('../error/apiError');

class OrderController {
    async createOrder(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const userId = req.user.id;
            const { items, totalPrice, delivery } = req.body;

            if (!items || !totalPrice || !delivery) {
                return next(ApiError.badRequest('Переданы не все данные.'))
            }

            const order = await prisma.order.create({
                data: {
                    userId,
                    price: totalPrice,
                    delivery,
                    status: 'created',
                    OrderItem: {
                        create: items.map((item: any) => ({
                            name: item.name,
                            price: item.price,
                            img: item.img,
                            quantity: item.quantity
                        }))
                    }
                },
                include: { OrderItem: true }
            })
            return res.json({ orderId: order.id })
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async createPayment(req: any, res: any, next: any) {
        try {
            const { orderId } = req.body;

            if (!orderId) {
                return next(ApiError.badRequest('Не передан ID заказа'))
            }

            const order = await prisma.order.findUnique({ where: { id: orderId } })
            if (!order) {
                return next(ApiError.notFound('Заказ не найден'))
            }
            const payment = await yooClient.createPayment(
                {
                    amount: {
                        value: order.price,
                        currency: "RUB",
                    },
                    confirmation: {
                        type: 'redirect',
                        return_url: `${process.env.LOCAL_URL}/checkout-status?orderId=${orderId}`,
                    },
                    capture: true,
                    description: 'Оплата заказа #' + orderId,
                    metadata: { orderId }
                },
                uuid.v4()
            )
            await prisma.order.update({
                where: { id: orderId },
                data: { paymentId: payment.id, status: 'pending' }
            })
            return res.json(payment.confirmation.confirmation_url);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async handleWebhook(req: any, res: any, next: any) {
        try {
            const event = req.body;

            if (event.event === 'payment.succeeded') {
                const payment = event.object;
                const orderId = payment.metadata?.orderId;

                if (!orderId) {
                    return next(ApiError.badRequest('Не указан orderId'))
                }

                await prisma.order.update({
                    where: { id: orderId },
                    data: { status: 'success' },
                })

                return res.status(200).json({ message: 'Платеж успешно выполнен' });
            } else if (event.event === 'payment.canceled') {
                const orderId = event.object.metadata?.orderId;
                if (orderId) {
                    await prisma.order.update({
                        where: { id: orderId },
                        data: { status: 'cancelled' },
                    })
                }
            }
            return res.sendStatus(200);
        } catch (err) {
            return res.sendStatus(200);
        }
    }

    async getOrderStatus(req: any, res: any, next: any) {
        try {
            const { orderId } = req.query;
            if (!orderId) {
                return next(ApiError.badRequest('Не указан ID заказа.'))
            }
            const order = await prisma.order.findUnique({
                where: { id: orderId as string },
                select: { status: true }
            });

            if (!order) {
                return next(ApiError.notFound('Не удалось найти заказ.'))
            }

            return res.json({ status: order.status });
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }

    async getOrders(req: any, res: any, next: any) {
        try {
            if (!req.user) {
                return next(ApiError.unauthorized('Информация о пользователе не найдена.'))
            }
            const userId = req.user.id;
            const orders = await prisma.order.findMany({
                where: { userId },
                include: {
                    OrderItem: true
                }
            })
            if (!orders) {
                return next(ApiError.notFound('Не удалось найти все заказы.'))
            }
            return res.json(orders);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере. Попробуйте позже.'))
        }
    }
}

module.exports = new OrderController();