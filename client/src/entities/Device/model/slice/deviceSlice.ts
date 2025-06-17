import { createSlice } from "@reduxjs/toolkit";
import { fetchAllDevices } from "../services/fetchAllDevices";
import { DeviceInitialState } from "../types/deviceInitialState";

const initialState: DeviceInitialState = {
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