import { getShippingInfo } from "@/shared/api/userApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchShippingInfo = createAsyncThunk(
    "shipping/fetchShippinginfo",
    async () => {
        try {
            const res = await getShippingInfo();
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)