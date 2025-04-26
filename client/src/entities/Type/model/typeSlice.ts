import { fetchTypes } from "@/shared/api/deviceApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TypeState } from "./types";

export const fetchAllTypes = createAsyncThunk(
    'types/fetchAllTypes',
    async () => {
        const res = await fetchTypes();
        return res
    }
)

const initialState: TypeState = {
    types: [],
    loading: 'idle'
}

const typeSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTypes.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(fetchAllTypes.fulfilled, (state, action) => {
                state.loading = 'idle'
                state.types = action.payload
            })
            .addCase(fetchAllTypes.rejected, (state) => {
                state.loading = "error"
            })
    }
})

export const typeReducer = typeSlice.reducer;