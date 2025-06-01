import { IFavoriteDevice } from "@/shared/types"

export interface FavoriteDevices {
    id: string,
    createdAt: string,
    updatedAt: string,
    userId: string,
    deviceId: string,
    device: IFavoriteDevice
}

export interface FavoriteStateSchema {
    favoriteDevices: FavoriteDevices[],
    loading: boolean,
    error: boolean,
    isLoaded: boolean
}