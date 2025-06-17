import { createSlice } from "@reduxjs/toolkit";
import { fetchAllFavoriteDevices } from "../services/fetchAllFavoriteDevices";
import { FavoriteInitialState } from "../types/favoriteInitialState";

const initialState: FavoriteInitialState = {
    favoriteDevices: [],
    loading: false,
    error: false,
    isLoaded: false,
    currentPage: 1,
}

const favoriteSlice = createSlice({
    name: "favoriteDevices",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const isExists = state.favoriteDevices.some((fav) => fav.device.id === action.payload.device.id);
            if (!isExists) {
                state.favoriteDevices.push(action.payload)
            }
        },
        removeFavorite: (state, action) => {
            state.favoriteDevices = state.favoriteDevices.filter((fav) => fav.device.id !== action.payload)
        },
        clearFavorite: (state) => {
            state.favoriteDevices = [];
        },
        setCurrentPage: (state, action) => {
            if (state.currentPage !== 0) {
                state.currentPage = action.payload;
            }
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchAllFavoriteDevices.pending, (state) => {
                state.loading = true;
                state.isLoaded = false;
            })
            .addCase(fetchAllFavoriteDevices.fulfilled, (state, action) => {
                state.favoriteDevices = action.payload;
                state.loading = false;
                state.isLoaded = true;
            })
            .addCase(fetchAllFavoriteDevices.rejected, (state) => {
                state.error = true;
                state.loading = false;
                state.isLoaded = false;
            })
})

export const { addFavorite, removeFavorite, clearFavorite, setCurrentPage } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;