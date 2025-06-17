import { OrderDataSchema } from "@/entities";
import { $authHost } from "@shared/api";

export const createOrder = async (orderData: OrderDataSchema) => {
    const { data } = await $authHost.post('/api/order/create-order/', orderData)
    return data;
}

export const createPayment = async (orderId: string) => {
    const { data } = await $authHost.post('/api/order/create-payment/', orderId);
    return data;
}

export const fetchStatus = async (orderId: string) => {
    const { data } = await $authHost.get(`/api/order/order-status?orderId=${orderId}`)
    return data;
}

export const fetchOrders = async () => {
    const { data } = await $authHost.get('/api/order/get-orders');
    return data;
}