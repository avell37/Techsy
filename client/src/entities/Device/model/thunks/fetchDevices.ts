import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDevices, fetchOneDevice } from "../api/deviceApi";

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