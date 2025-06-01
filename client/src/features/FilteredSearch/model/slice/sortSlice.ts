import { createSlice } from "@reduxjs/toolkit";
import { SortStateSchema } from "../types/sortStateSchema";

const initialState: SortStateSchema = {
    sortType: null,
    search: '',
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortType: (state, action) => {
            state.sortType = action.payload;
        },
        setSearchFilter: (state, action) => {
            state.search = action.payload
        }
    }
})

export const {setSortType, setSearchFilter} = sortSlice.actions;

export const sortReducer = sortSlice.reducer;