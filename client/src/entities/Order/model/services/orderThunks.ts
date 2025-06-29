import { createOrder, fetchOrders, fetchStatus } from "@/entities/Order/api/orderApi"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { OrderDataProps } from "../types/createOrderProps";

export const createNewOrder = createAsyncThunk(
    'order/createOrder',
    async (orderData: OrderDataProps) => {
        try {
            const res = await createOrder(orderData);
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)

export const fetchOrderStatus = createAsyncThunk(
    'order/fetchStatus',
    async (orderId: string) => {
        try {
            const res = await fetchStatus(orderId);
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)

export const fetchUserOrders = createAsyncThunk(
    'orders/fetchUserOrders',
    async () => {
        try {
            const res = await fetchOrders();
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)