import { $authHost, $host } from "@/shared/api";
import type { IBrand } from "../types/IBrand";

export const createBrand = async (brand: string) => {
    const { data } = await $authHost.post('/api/brand', { name: brand })
    return data;
}

export const fetchBrands = async (): Promise<IBrand[]> => {
    const { data } = await $host.get<IBrand[]>('/api/brand');
    return data;
}

export const fetchOneBrand = async (id: string) => {
    const { data } = await $host.get(`/api/brand/${id}`)
    return data;
}

export const updateBrand = async (id: string, brand: string) => {
    const { data } = await $authHost.patch(`/api/brand/${id}`, { name: brand })
    return data;
}

export const deleteOneBrand = async (id: string) => {
    const { data } = await $authHost.delete(`/api/brand/${id}`)
    return data;
}