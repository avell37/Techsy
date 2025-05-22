import { fetchTypes } from "@/shared/api/deviceApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TypeStateSchema } from "../types/typeStateSchema";

export const fetchAllTypes = createAsyncThunk(
    'types/fetchAllTypes',
    async () => {
        const res = await fetchTypes();
        return res
    }
)

const initialState: TypeStateSchema = {
    types: [],
    loading: false,
    error: false,
    selectedType: {
        id: '',
        name: 'Тип',
    }
}

const typeSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {
        setSelectedType(state, action) {
            state.selectedType = {...state.selectedType, ...action.payload};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTypes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllTypes.fulfilled, (state, action) => {
                state.loading = false;
                state.types = action.payload
            })
            .addCase(fetchAllTypes.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const {setSelectedType} = typeSlice.actions;

export const typeReducer = typeSlice.reducer;