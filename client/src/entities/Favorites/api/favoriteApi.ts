import { $authHost } from "@shared/api";
import { FavoriteDevices } from "../model/types/favoriteDevices";

export const fetchFavoriteDevices = async (): Promise<FavoriteDevices[]> => {
    const { data } = await $authHost.get<FavoriteDevices[]>('/api/favorite/');
    return data;
}

export const toggleFavoriteDevice = async (deviceId: string) => {
    const { data } = await $authHost.post('/api/favorite/', { deviceId })
    return data;
}