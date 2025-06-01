import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReviews } from "@/shared/api/deviceApi";

export const fetchDeviceReviews = createAsyncThunk(
    'reviews/fetchDeviceReviews',
    async (deviceId: string) => {
        try {
            const res = await fetchReviews(deviceId);
            return res || [];
        } catch (err) {
            console.error(err);        
        }
    }
)