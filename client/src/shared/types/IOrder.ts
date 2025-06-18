import { IOrderItem } from "./IOrderItem";

export interface IOrder {
    id: string,
    createdAt: string,
    updatedAt: string,
    userId: string,
    price: number,
    status: 'created' | 'pending' | 'cancelled' | 'success',
    delivery: string,
    paymentId: string,
    OrderItem: IOrderItem[]
}