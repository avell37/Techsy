import { IDevice } from "@/shared/types/IDevice"

export interface DeviceInitialState {
    devices: IDevice[],
    selectedDevice: IDevice | null,
    loading: boolean,
    error: boolean,
}