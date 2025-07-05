import { createSlice } from "@reduxjs/toolkit";
import { fetchAllBrands } from "../services/fetchAllBrands";
import { BrandInitialState } from "../types/brandInitialState";

const initialState: BrandInitialState = {
    brands: [],
    selectedBrand: {
        id: '',
        name: 'Бренд'
    },
    loading: false,
    error: false
}

const brandSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {
        setSelectedBrand(state, action) {
            state.selectedBrand = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBrands.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllBrands.fulfilled, (state, action) => {
                state.loading = false;
                state.brands = action.payload ?? [];
            })
            .addCase(fetchAllBrands.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const brandActions = brandSlice.actions;
export const brandReducer = brandSlice.reducer;