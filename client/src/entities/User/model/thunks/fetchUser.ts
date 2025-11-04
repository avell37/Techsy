import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser, fetchUserData } from "../api/userApi";

export const getUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        try {
            const res = await fetchUser();
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)

export const getData = createAsyncThunk(
    'user/fetchUserData',
    async () => {
        try {
            const res = await fetchUserData();
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)