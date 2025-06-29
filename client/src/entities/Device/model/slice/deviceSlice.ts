import { createSlice } from "@reduxjs/toolkit";
import { fetchAllDevices } from "../services/fetchAllDevices";
import { DeviceInitialState } from "../types/deviceInitialState";
import { fetchDeviceById } from "../services/fetchDeviceById";

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
                state.devices = action.payload;
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