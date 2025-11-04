import { createAsyncThunk } from "@reduxjs/toolkit";
import { createPayment } from "../api/orderApi";

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