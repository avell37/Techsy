import { getBasket } from "@/shared/api/basketApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

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