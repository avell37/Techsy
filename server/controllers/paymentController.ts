const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const yooClient = require('../utils/yooClient')
const uuid = require('uuid');

class PaymentController {
    async createOrder(req: any, res: any) {
        const userId = req.user.id;
        const { items, totalPrice, delivery } = req.body;
        try {
            const order = await prisma.order.create({
                data: {
                    userId,
                    price: totalPrice,
                    delivery,
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
            res.json({orderId: order.id})
        } catch (err) {
            console.log(err);
            return res.json(err);
        }
    }

    async createPayment(req: any, res: any) {
        const { orderId } = req.body;

        if (!orderId) {
            return res.status(400).json({ error: 'Не передан orderId' });
        }

        const order = await prisma.order.findUnique({where: {id: orderId}})
        if (!order) return res.status(404).json({error: 'Заказ не найден'})

        const idempotenceKey = uuid.v4();
        const amount = order.price;
        
        try {
            const payment = await yooClient.createPayment(
                {
                    amount: {
                        value: amount,
                        currency: "RUB",
                    },
                    confirmation: {
                        type: 'redirect',
                        return_url: 'http://localhost:5173/checkout-status?orderId=' + orderId,
                    },
                    capture: true,
                    description: 'Оплата заказа #' + orderId,
                    metadata: {orderId}
                },
                idempotenceKey
            )
            await prisma.order.update({
                where: {id: orderId},
                data: {paymentId: payment.id}
            })
            return res.json(payment.confirmation.confirmation_url);
        } catch (err) {
            console.log(err);
            return res.status(500).json({message: err})
        }
    }
}

module.exports = new PaymentController();