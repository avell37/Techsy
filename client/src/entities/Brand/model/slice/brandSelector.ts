import { RootState } from "@/app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const brandState = (state: RootState) => state['brandReducer'];

export const brandSelector = {
    brands: createSelector(
        [brandState],
        (brandReducer) => brandReducer.brands
    ),
    selectedBrand: createSelector(
        [brandState],
        (brandReducer) => brandReducer.selectedBrand
    ),
    loading: createSelector(
        [brandState],
        (brandReducer) => brandReducer.loading
    ),
    error: createSelector(
        [brandState],
        (brandReducer) => brandReducer.error
    )
}