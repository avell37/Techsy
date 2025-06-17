import { fetchUserData } from "@/entities/User/api/userApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        try {
            const res = await fetchUserData();
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)