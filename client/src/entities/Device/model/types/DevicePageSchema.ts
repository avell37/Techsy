import type { IDevice } from "./IDevice";

export interface DevicePageSchema {
    device: IDevice | null,
    isFavorite: boolean,
    toggleFavorites: () => void,
    notifyError: (message: string) => void,
    notifySuccess: (message: string) => void,
}