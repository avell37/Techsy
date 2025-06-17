import { createSlice } from "@reduxjs/toolkit";
import { fetchDeviceReviews } from "../services/fetchDeviceReviews";
import { ReviewInitialState } from "../types/reviewInitialState";

const initialState: ReviewInitialState = {
    reviews: [],
    loading: false,
    error: false,
}

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDeviceReviews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDeviceReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews = action.payload;
            })
            .addCase(fetchDeviceReviews.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const reviewReducer = reviewSlice.reducer;