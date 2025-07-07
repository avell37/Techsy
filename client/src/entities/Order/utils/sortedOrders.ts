import { IOrder } from "@/shared/types";

export const sortedOrders = (orders: IOrder[]) =>
    [...orders].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());