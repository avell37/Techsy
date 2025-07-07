import { createSlice } from "@reduxjs/toolkit";
import { TypeInitialState } from "../types/typeInitialState";
import { fetchAllTypes } from "../services/fetchAllTypes";

const initialState: TypeInitialState = {
    types: [],
    selectedType: {
        id: '',
        name: 'Тип',
    },
    loading: false,
    error: false
}

const typeSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {
        setSelectedType(state, action) {
            state.selectedType = { ...state.selectedType, ...action.payload };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTypes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllTypes.fulfilled, (state, action) => {
                state.loading = false;
                state.types = action.payload ?? [];
            })
            .addCase(fetchAllTypes.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const typeActions = typeSlice.actions;

export const typeReducer = typeSlice.reducer;