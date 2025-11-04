import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllBrands } from "../thunks/fetchAllBrands";
import type { BrandInitialState } from "../types/brandInitialState";
import type { IBrand } from "../types/IBrand";

const initialState: BrandInitialState = {
    brands: [],
    selectedBrand: {
        id: "",
        name: "Бренд",
    },
    loading: false,
    error: false,
};

const brandSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {
        setSelectedBrand(state, action: PayloadAction<IBrand>) {
            state.selectedBrand = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBrands.pending, (state) => {
                state.loading = true;
            })
            .addCase(
                fetchAllBrands.fulfilled,
                (state, action: PayloadAction<IBrand[] | undefined>) => {
                    state.loading = false;
                    state.brands = action.payload ?? [];
                }
            )
            .addCase(fetchAllBrands.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    },
});

export const brandActions = brandSlice.actions;
export const brandReducer = brandSlice.reducer;
