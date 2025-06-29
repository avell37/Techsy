import { OrderItemProps } from "@/entities";
import { createOrder, createPayment } from "@/entities/Order/api/orderApi";

type СreateOrderResult = {
    confirmationUrl: string
}

export const useCreateOrder = () => {
    const create = async (orderItems: OrderItemProps[], totalPrice: number): Promise<СreateOrderResult> => {
        const orderData = {
            items: orderItems,
            totalPrice,
            delivery: "3 дня",
        }

        const order = await createOrder(orderData)
        const confirmationUrl = await createPayment(order)
        return { confirmationUrl }
    }

    return { create };
}