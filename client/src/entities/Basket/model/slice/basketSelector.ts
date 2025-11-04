import { RootState } from "@/app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const basketState = (state: RootState) => state['basketReducer'];

export const basketSelector = {
    basket: createSelector(
        [basketState],
        (basketReducer) => basketReducer.basket
    ),
    loading: createSelector(
        [basketState],
        (basketReducer) => basketReducer.loading
    ),
    error: createSelector(
        [basketState],
        (basketReducer) => basketReducer.error
    )
}