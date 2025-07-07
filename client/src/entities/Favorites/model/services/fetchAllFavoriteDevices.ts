import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFavoriteDevices } from "../../api/favoriteApi";

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