import { $authHost, $host } from "@/shared/api";

export const createType = async (type: string) => {
    const { data } = await $authHost.post('/api/type', { name: type })
    return data;
}

export const fetchTypes = async () => {
    const { data } = await $host.get('/api/type');
    return data;
}

export const fetchOneType = async (id: string) => {
    const { data } = await $host.get('/api/type' + "/" + id)
    return data;
}

export const deleteOneType = async (id: string) => {
    const { data } = await $authHost.delete('/api/type' + '/' + id);
    return data;
}