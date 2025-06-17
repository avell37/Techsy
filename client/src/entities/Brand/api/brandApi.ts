import { $authHost, $host } from "@/shared/api";

export const createBrand = async (brand: string) => {
    const { data } = await $authHost.post('/api/brand', { name: brand })
    return data;
}

export const fetchBrands = async () => {
    const { data } = await $host.get('/api/brand');
    return data;
}

export const fetchOneBrand = async (id: string) => {
    const { data } = await $host.get('/api/brand' + "/" + id)
    return data;
}

export const deleteOneBrand = async (id: string) => {
    const { data } = await $authHost.delete('/api/brand' + '/' + id)
    return data;
}