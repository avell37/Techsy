import { $authHost } from "@shared/api";
import type { OrderDataProps } from "../types/createOrderProps";
import type { IOrder } from "../types/IOrder";

export const createOrder = async (orderData: OrderDataProps) => {
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

export const fetchOrders = async (): Promise<IOrder[]> => {
    const { data } = await $authHost.get<IOrder[]>('/api/order/get-orders');
    return data;
}