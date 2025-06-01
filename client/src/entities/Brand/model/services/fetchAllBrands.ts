import { fetchBrands } from "@/shared/api/deviceApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllBrands = createAsyncThunk(
    'brands/fetchAllBrands',
    async () => {
        try {
            const res = await fetchBrands();
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)