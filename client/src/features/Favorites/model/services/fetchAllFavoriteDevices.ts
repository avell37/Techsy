import { fetchFavoriteDevices } from "@/shared/api/deviceApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllFavoriteDevices = createAsyncThunk(
    'favoriteDevices/fetchAllFavoriteDevices',
    async () => {
        try {
            const res = await fetchFavoriteDevices();
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)