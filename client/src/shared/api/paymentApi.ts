import { OrderDataSchema } from "@/features/Payment/model/types/createSchema";
import { $authHost } from ".";

export const createOrder = async (orderData: OrderDataSchema) => {
    const {data} = await $authHost.post('/api/payment/order/', orderData)
    return data;
}

export const createPayment = async (orderId: string) => {
    const {data} = await $authHost.post('/api/payment/', orderId);
    return data;
}