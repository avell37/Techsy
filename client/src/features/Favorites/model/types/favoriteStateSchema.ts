export interface FavoriteDevice {
    id: string,
    createdAt: string,
    updatedAt: string,
    name: string,
    price: number,
    rating: 0,
    img: string,
    brandId: string,
    typeId: string,
    basketId?: null
}

export interface FavoriteDevices {
    id: string,
    createdAt: string,
    updatedAt: string,
    userId: string,
    deviceId: string,
    device: FavoriteDevice
}

export interface FavoriteStateSchema {
    favoriteDevices: FavoriteDevices[],
    loading: boolean,
    error: boolean,
    isLoaded: boolean
}