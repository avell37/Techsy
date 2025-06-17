import { $authHost } from "@shared/api";

export const fetchFavoriteDevices = async () => {
    const { data } = await $authHost.get('/api/favorite' + '/');
    return data;
}

export const toggleFavoriteDevice = async (deviceId: string) => {
    const { data } = await $authHost.post('/api/favorite', { deviceId })
    return data;
}