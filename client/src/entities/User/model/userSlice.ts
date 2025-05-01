import { fetchUserData } from "@/shared/api/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserProps } from "./types";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const res = await fetchUserData();
        return res
    }
)

const initialState: UserProps = {
    currentUser: null,
    loading: "idle"
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
                state.loading = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.currentUser = action.payload
                state.loading = 'idle';
            })
            .addCase(fetchUser.rejected, (state) => {
                state.loading = 'error'
            })
    }
})

export const userReducer = userSlice.reducer;

export const {updateAvatar, logout} = userSlice.actions;