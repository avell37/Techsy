import { createOrder, createPayment } from "@/shared/api/paymentApi"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { OrderDataSchema } from "../types/createSchema";

export const createNewOrder = createAsyncThunk(
    'order/create',
    async (orderData: OrderDataSchema) => {
        try {
            const res = await createOrder(orderData);
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)

export const createNewPayment = createAsyncThunk(
    'payment/create',
    async (orderId: string) => {
        try {
            const res = await createPayment(orderId);
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)