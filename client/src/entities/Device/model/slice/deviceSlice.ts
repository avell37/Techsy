import { createSlice } from "@reduxjs/toolkit";
import { DeviceStateSchema } from "../types/deviceStateSchema";
import { fetchAllDevices } from "../services/fetchAllDevices";

const initialState: DeviceStateSchema = {
    devices: [],
    loading: false,
    error: false,
}

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDevices.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllDevices.fulfilled, (state, action) => {
                state.devices = action.payload;
                state.loading = false;
            })
            .addCase(fetchAllDevices.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const deviceReducer = deviceSlice.reducer;