import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBrands } from "../../api/brandApi";

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