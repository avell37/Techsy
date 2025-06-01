import { createSlice } from "@reduxjs/toolkit";
import { UserStateSchema } from "../types/userStateSchema";
import { fetchUser } from "../services/fetchUser";

const initialState: UserStateSchema = {
    currentUser: null,
    loading: false,
    error: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateAvatar: (state, action) => {
            if (state.currentUser) {
                state.currentUser = {...state.currentUser, picture: action.payload}
            }
        },
        logout: (state) => {
            state.currentUser = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.currentUser = action.payload ?? null;
                state.loading = false;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const userReducer = userSlice.reducer;

export const {updateAvatar, logout} = userSlice.actions;