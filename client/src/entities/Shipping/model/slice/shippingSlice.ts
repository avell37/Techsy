import { createSlice } from "@reduxjs/toolkit";
import { fetchShippingInfo } from "../services/fetchShippingInfo";
import { ShippingInitialState } from "../types/shippingInitialState";

const initialState: ShippingInitialState = {
    shipping: {
        firstName: '',
        lastName: '',
        phone: '',
        country: '',
        region: '',
        zipCode: '',
        city: '',
        address: ''
    },
    loading: false,
    error: false
}

const shippingSlice = createSlice({
    name: "shipping",
    initialState,
    reducers: {
        saveInfo: (state, action) => {
            state.shipping = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchShippingInfo.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchShippingInfo.fulfilled, (state, action) => {
                state.shipping = action.payload;
                state.loading = false;
            })
            .addCase(fetchShippingInfo.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const { saveInfo } = shippingSlice.actions;

export const shippingReducer = shippingSlice.reducer;