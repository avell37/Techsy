import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOneDevice } from "../../api/deviceApi";

export const fetchDeviceById = createAsyncThunk(
    'devices/fetchDeviceById',
    async (id: string) => {
        try {
            const res = await fetchOneDevice(id);
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)