import { createSlice } from "@reduxjs/toolkit";
import type { DeviceInitialState } from "../types/deviceInitialState";
import { fetchAllDevices, fetchDeviceById } from "../thunks/fetchDevices";

const initialState: DeviceInitialState = {
    devices: [],
    selectedDevice: null,
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
                state.devices = action.payload ?? [];
                state.loading = false;
            })
            .addCase(fetchAllDevices.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })

            .addCase(fetchDeviceById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDeviceById.fulfilled, (state, action) => {
                state.selectedDevice = action.payload;
                state.loading = false;
            })
            .addCase(fetchDeviceById.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const deviceReducer = deviceSlice.reducer;