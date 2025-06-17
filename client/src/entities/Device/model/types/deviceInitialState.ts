import { IDevice } from "@/shared/types/IDevice"

export interface DeviceInitialState {
    devices: IDevice[],
    loading: boolean,
    error: boolean,
}