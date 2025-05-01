import { $authHost, $host } from "./index";

export const createType = async (type: string) => {
    const {data} = await $authHost.post('/api/type', {name: type})
    return data;
}

export const fetchTypes = async () => {
    const {data} = await $host.get('/api/type');
    return data;
}

export const fetchOneType = async (id: string) => {
    const {data} = await $host.get('/api/type' + "/" + id)
    return data;
}

export const createBrand = async (brand: string) => {
    const {data} = await $authHost.post('/api/brand', {name: brand})
    return data;
}

export const fetchBrands = async () => {
    const {data} = await $host.get('/api/brand');
    return data;
}

export const fetchOneBrand = async (id: string) => {
    const {data} = await $host.get('/api/brand' + "/" + id)
    return data;
}

export const createDevice = async (device: object) => {
    const {data} = await $authHost.post('/api/device', device);
    return data;
}

export const fetchDevices = async () => {
    const {data} = await $host.get('/api/device');
    return data;
}

export const fetchOneDevice = async (id: string) => {
    const {data} = await $host.get('/api/device' + '/' + id);
    return data;
}