import { createAsyncThunk } from "@reduxjs/toolkit";
import { getShippingInfo } from "../../api/shippingApi";

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