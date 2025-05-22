import { fetchBrands } from "@/shared/api/deviceApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BrandStateSchema } from "../types/brandStateSchema";

export const fetchAllBrands = createAsyncThunk(
    'brands/fetchAllBrands',
    async () => {
        const res = await fetchBrands();
        return res
    }
)

const initialState: BrandStateSchema = {
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
                state.brands = action.payload;
            })
            .addCase(fetchAllBrands.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const {setSelectedBrand} = brandSlice.actions;

export const brandReducer = brandSlice.reducer;