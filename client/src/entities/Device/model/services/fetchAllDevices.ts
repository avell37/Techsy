import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDevices } from "@/shared/api/deviceApi";

export const fetchAllDevices = createAsyncThunk(
    'devices/fetchDevices',
    async () => {
        try {
            const res = await fetchDevices();
            return res || [];
        } catch (err) {
            console.error(err);
        }
    }
)