import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBasket } from "../api/basketApi";

export const fetchBasket = createAsyncThunk(
    "basket/fetchBasket",
    async () => {
        try {
            const res = await getBasket();
            return res.BasketDevice
        } catch (err) {
            console.error(err);
        }
    }
)