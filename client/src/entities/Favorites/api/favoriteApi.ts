import { IFavoriteDevice } from "@/shared/types";
import { $authHost } from "@shared/api";

export const fetchFavoriteDevices = async (): Promise<IFavoriteDevice[]> => {
    const { data } = await $authHost.get<IFavoriteDevice[]>('/api/favorite/');
    return data;
}

export const toggleFavoriteDevice = async (deviceId: string) => {
    const { data } = await $authHost.post('/api/favorite/', { deviceId })
    return data;
}