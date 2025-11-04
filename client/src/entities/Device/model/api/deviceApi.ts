import { $authHost, $host } from "@shared/api";
import type { IDevice } from "../types/IDevice";

export const createDevice = async (device: FormData) => {
    const { data } = await $authHost.post('/api/device', device);
    return data;
}

export const fetchDevices = async (): Promise<IDevice[]> => {
    const { data } = await $host.get<IDevice[]>('/api/device');
    return data;
}

export const fetchOneDevice = async (id: string) => {
    const { data } = await $host.get(`/api/device/${id}`);
    return data;
}

export const updateDevice = async (id: string, device: FormData) => {
    const { data } = await $authHost.patch(`/api/device/${id}`, device);
    return data;
}

export const deleteOneDevice = async (id: string) => {
    const { data } = await $authHost.delete(`/api/device/${id}`);
    return data;
}