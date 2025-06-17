import { createSlice } from "@reduxjs/toolkit";
import { fetchBasket } from "../services/fetchBasket";
import { BasketInitialState } from "../types/basketInitialState";

const initialState: BasketInitialState = {
    basket: [],
    loading: false,
    error: false
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        deleteFromBasket: (state, action) => {
            state.basket = state.basket.filter((device) => device.id !== action.payload)
        },
        incrementBasketDevice: (state, action) => {
            state.basket = state.basket.map((item) => item.deviceId === action.payload
                ? { ...item, quantity: item.quantity + 1 } : item);
        },
        decrementBasketDevice: (state, action) => {
            state.basket = state.basket.map((item) => item.deviceId === action.payload && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 } : item);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBasket.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBasket.fulfilled, (state, action) => {
                state.basket = action.payload;
                state.loading = false;
            })
            .addCase(fetchBasket.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const basketReducer = basketSlice.reducer;

export const { deleteFromBasket, incrementBasketDevice, decrementBasketDevice } = basketSlice.actions;