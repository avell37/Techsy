import { RootState } from "@/app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const deviceState = (state: RootState) => state['deviceReducer'];

export const deviceSelector = {
    devices: createSelector(
        [deviceState],
        (deviceReducer) => deviceReducer.devices
    ),
    selectedDevice: createSelector(
        [deviceState],
        (deviceReducer) => deviceReducer.selectedDevice
    ),
    loading: createSelector(
        [deviceState],
        (deviceReducer) => deviceReducer.loading
    ),
    error: createSelector(
        [deviceState],
        (deviceReducer) => deviceReducer.error
    )
}