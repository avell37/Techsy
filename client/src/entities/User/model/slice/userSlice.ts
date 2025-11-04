import { createSlice } from "@reduxjs/toolkit";
import type { UserInitialState } from "../types/userInitialState";
import { getData, getUser } from "../thunks/fetchUser";

const initialState: UserInitialState = {
    currentUser: null,
    isAuth: false,
    loading: false,
    error: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateAvatar: (state, action) => {
            if (state.currentUser) {
                state.currentUser = { ...state.currentUser, picture: action.payload }
            }
        },
        logout: (state) => {
            state.currentUser = null;
        },
        addFavorite: (state, action) => {
            if (!state.currentUser) return;
            const isExists = state.currentUser.favorites.some((favorite) => 
                favorite.id === action.payload.id
            );
            if (!isExists) state.currentUser.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            if (!state.currentUser) return;
            state.currentUser.favorites = state.currentUser.favorites.filter(
                (favorite) => favorite.id !== action.payload
            );
        },
        addUserReview: (state, action) => {
            if (state.currentUser?.reviews) {
                state.currentUser.reviews.push(action.payload);
            }
            else if (state.currentUser) {
                state.currentUser.reviews = [action.payload];
            }
        },
        updateUserReview: (state, action) => {
            if (!state.currentUser?.reviews) return;
            const review = state.currentUser.reviews.findIndex(rev => rev.id === action.payload.id);
            if (review !== -1) {
                state.currentUser.reviews[review] = action.payload
            }
        },
        removeUserReview: (state, action) => {
            if (!state.currentUser?.reviews) return;
            state.currentUser.reviews = state.currentUser.reviews.filter(
                rev => rev.id !== action.payload
            )
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.currentUser = action.payload ?? null;
                state.isAuth = true;
                state.loading = false;
            })
            .addCase(getUser.rejected, (state) => {
                state.isAuth = false;
                state.loading = false;
                state.error = true;
            })

            .addCase(getData.fulfilled, (state, action) => {
                if (state.currentUser) {
                    state.currentUser = {
                        ...state.currentUser,
                        ...action.payload
                    }
                }
            })
    }
})

export const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;