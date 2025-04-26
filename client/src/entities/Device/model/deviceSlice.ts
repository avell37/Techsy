import { fetchDevices } from "@/shared/api/deviceApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DeviceState } from "./types";

export const fetchAllDevices = createAsyncThunk(
    'devices/fetchDevices',
    async () => {
        const res = await fetchDevices();
        return res || [];
    }
)

const initialState: DeviceState = {
    devices: [],
    loading: 'idle',
    filters: {
        search: '',
        brand: null,
        type: null
    }
}

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setSearchFilter: (state, action) => {
            state.filters.search = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDevices.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchAllDevices.fulfilled, (state, action) => {
                state.devices = action.payload;
                state.loading = 'idle';
            })
            .addCase(fetchAllDevices.rejected, (state) => {
                state.loading = 'error'
            })
    }
})

export const deviceReducer = deviceSlice.reducer;

export const {setSearchFilter} = deviceSlice.actions