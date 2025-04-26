import { IDevice } from "@/shared/types/IDevice"

export interface DeviceState {
    devices: IDevice[],
    loading: string,
    filters: {
        search: string,
        brand: string | null,
        type: string | null
    }
}