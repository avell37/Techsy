import { createPayment } from "@/entities/Order/api/orderApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createNewPayment = createAsyncThunk(
    'order/createPayment',
    async (orderId: string) => {
        try {
            const res = await createPayment(orderId);
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)