import { RootState } from "@/app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const typeState = (state: RootState) => state['typeReducer'];

export const typeSelector = {
    types: createSelector(
        [typeState],
        (typeReducer) => typeReducer.types
    ),
    selectedType: createSelector(
        [typeState],
        (typeReducer) => typeReducer.selectedType
    ),
    loading: createSelector(
        [typeState],
        (typeReducer) => typeReducer.loading
    ),
    error: createSelector(
        [typeState],
        (typeReducer) => typeReducer.error
    ),
}