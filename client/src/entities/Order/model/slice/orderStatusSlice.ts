import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderStatus } from "../services/orderThunks";
import { OrderStatusInitialState } from "../types/orderStatusInitialState";

const initialState: OrderStatusInitialState = {
    status: '',
    loading: false
}

const orderStatusSlice = createSlice({
    name: 'orderStatus',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrderStatus.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOrderStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.status = action.payload.status;
            })
    }
})

export const orderStatusReducer = orderStatusSlice.reducer;