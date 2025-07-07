import { RootState } from "@/app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const favoriteState = (state: RootState) => state['favoriteReducer'];

export const favoriteSelector = {
    favoriteDevices: createSelector(
        [favoriteState],
        (favoriteReducer) => favoriteReducer.favoriteDevices
    ),
    loading: createSelector(
        [favoriteState],
        (favoriteReducer) => favoriteReducer.loading
    ),
    error: createSelector(
        [favoriteState],
        (favoriteReducer) => favoriteReducer.error
    ),
    isLoaded: createSelector(
        [favoriteState],
        (favoriteReducer) => favoriteReducer.isLoaded
    ),
    currentPage: createSelector(
        [favoriteState],
        (favoriteReducer) => favoriteReducer.currentPage
    )
}