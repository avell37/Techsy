import { fetchBrands } from "@/shared/api/deviceApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BrandState } from "./types";

export const fetchAllBrands = createAsyncThunk(
    'brands/fetchAllBrands',
    async () => {
        const res = await fetchBrands();
        return res
    }
)

const initialState: BrandState = {
    brands: [],
    loading: "idle",
}

const brandSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBrands.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(fetchAllBrands.fulfilled, (state, action) => {
                state.loading = "idle"
                state.brands = action.payload;
            })
            .addCase(fetchAllBrands.rejected, (state) => {
                state.loading = "error"
            })
    }
})

export const brandReducer = brandSlice.reducer;