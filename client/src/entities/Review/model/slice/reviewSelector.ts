import { RootState } from "@/app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const reviewState = (state: RootState) => state['reviewReducer'];

export const reviewSelector = {
    reviews: createSelector(
        [reviewState],
        (reviewReducer) => reviewReducer.reviews
    ),
    loading: createSelector(
        [reviewState],
        (reviewReducer) => reviewReducer.loading
    ),
    error: createSelector(
        [reviewState],
        (reviewReducer) => reviewReducer.error
    ),
}