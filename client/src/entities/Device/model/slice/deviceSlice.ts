import { fetchDevices } from "@/shared/api/deviceApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DeviceStateSchema } from "../types/deviceStateSchema";

export const fetchAllDevices = createAsyncThunk(
    'devices/fetchDevices',
    async () => {
        const res = await fetchDevices();
        return res || [];
    }
)

const initialState: DeviceStateSchema = {
    devices: [],
    loading: false,
    error: false,
    search: ''
}

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setSearchFilter: (state, action) => {
            state.search = action.payload
        }
    },
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

export const {setSearchFilter} = deviceSlice.actions