import { createSlice } from "@reduxjs/toolkit";
import { FavoriteStateSchema } from "../types/favoriteStateSchema";
import { fetchAllFavoriteDevices } from "../services/fetchAllFavoriteDevices";

const initialState: FavoriteStateSchema = {
    favoriteDevices: [],
    loading: false,
    error: false,
    isLoaded: false
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

export const {addFavorite, removeFavorite, clearFavorite} = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;