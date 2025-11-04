import type { IDevice } from "./IDevice";

export interface DeviceInitialState {
    devices: IDevice[],
    selectedDevice: IDevice | null,
    loading: boolean,
    error: boolean,
}