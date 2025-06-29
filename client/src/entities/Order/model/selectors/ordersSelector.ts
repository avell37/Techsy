import { RootState } from "@/app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const ordersState = (state: RootState) => state['ordersReducer'];

export const ordersSelector = {
    orders: createSelector(
        [ordersState],
        (ordersReducer) => ordersReducer.orders
    ),
    loading: createSelector(
        [ordersState],
        (ordersReducer) => ordersReducer.loading
    ),
    error: createSelector(
        [ordersState],
        (ordersReducer) => ordersReducer.error
    ),
}