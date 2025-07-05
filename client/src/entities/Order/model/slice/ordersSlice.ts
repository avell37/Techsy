import { createSlice } from "@reduxjs/toolkit";
import { fetchUserOrders } from "../services/orderThunks";
import { OrderInitialState } from "../types/orderInitialState";

const initialState: OrderInitialState = {
    orders: [],
    loading: false,
    error: false
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserOrders.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchUserOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload ?? [];
            })
            .addCase(fetchUserOrders.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    }
});

export const ordersReducer = ordersSlice.reducer;