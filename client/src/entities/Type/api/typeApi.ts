import { $authHost, $host } from "@/shared/api";
import { IType } from "@/shared/types";

export const createType = async (type: string) => {
    const { data } = await $authHost.post('/api/type', { name: type })
    return data;
}

export const fetchTypes = async (): Promise<IType[]> => {
    const { data } = await $host.get<IType[]>('/api/type');
    return data;
}

export const fetchOneType = async (id: string) => {
    const { data } = await $host.get(`/api/type/${id}`);
    return data;
}

export const deleteOneType = async (id: string) => {
    const { data } = await $authHost.delete(`/api/type/${id}`);
    return data;
}