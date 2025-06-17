import { $authHost, $host } from "@shared/api";

export const createDevice = async (device: object) => {
    const { data } = await $authHost.post('/api/device', device);
    return data;
}

export const fetchDevices = async () => {
    const { data } = await $host.get('/api/device');
    return data;
}

export const fetchOneDevice = async (id: string) => {
    const { data } = await $host.get('/api/device' + '/' + id);
    return data;
}

export const deleteOneDevice = async (id: string) => {
    const { data } = await $authHost.delete('/api/device' + '/' + id)
    return data;
}