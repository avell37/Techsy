import { IDevice } from "@/shared/types/IDevice"

export interface DeviceState {
    devices: IDevice[],
    loading: string,
    search: '',
}