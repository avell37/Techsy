import { IDevice } from "@/shared/types/IDevice"

export interface DeviceStateSchema {
    devices: IDevice[],
    loading: boolean,
    error: boolean,
    search: '',
}