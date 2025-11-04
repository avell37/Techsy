import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBasket } from "../thunks/fetchBasket";
import type { BasketInitialState } from "../types/basketInitialState";
import type { IBasketItem } from "../types/IBasketItem";

const initialState: BasketInitialState = {
    basket: [],
    loading: false,
    error: false
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    selectors: {},
    reducers: {
        deleteFromBasket: (state, action: PayloadAction<string>) => {
            state.basket = state.basket.filter((device) => device.deviceId !== action.payload)
        },
        incrementBasketDevice: (state, action: PayloadAction<string>) => {
            state.basket = state.basket.map((item) => item.deviceId === action.payload
                ? { ...item, quantity: item.quantity + 1 } : item);
        },
        decrementBasketDevice: (state, action: PayloadAction<string>) => {
            state.basket = state.basket.map((item) => item.deviceId === action.payload && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 } : item);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBasket.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBasket.fulfilled, (state, action: PayloadAction<IBasketItem[] | undefined>) => {
                state.basket = action.payload ?? [];
                state.loading = false;
            })
            .addCase(fetchBasket.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const basketReducer = basketSlice.reducer;
export const basketActions = basketSlice.actions;