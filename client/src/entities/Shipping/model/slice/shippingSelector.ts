import { RootState } from "@/app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const shippingState = (state: RootState) => state['shippingReducer'];

export const shippingSelector = {
    shipping: createSelector(
        [shippingState],
        (shippingReducer) => shippingReducer.shipping
    ),
    loading: createSelector(
        [shippingState],
        (shippingReducer) => shippingReducer.loading
    ),
    error: createSelector(
        [shippingState],
        (shippingReducer) => shippingReducer.error
    ),
}