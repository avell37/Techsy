import { fetchReviews } from "@/shared/api/deviceApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReviewStateSchema } from "../types/reviewStateSchema";

export const fetchDeviceReviews = createAsyncThunk(
    'reviews/fetchDeviceReviews',
    async (deviceId: string) => {
        const res = await fetchReviews(deviceId);
        return res || [];
    }
)

const initialState: ReviewStateSchema = {
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