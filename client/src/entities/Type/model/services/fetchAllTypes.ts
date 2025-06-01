import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTypes } from "@/shared/api/deviceApi";

export const fetchAllTypes = createAsyncThunk(
    'types/fetchAllTypes',
    async () => {
        try {
            const res = await fetchTypes();
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)