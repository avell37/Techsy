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

export const deleteOneType = async (id: string) => {
    try {
        const {data} = await $authHost.delete('/api/type' + '/' + id);
        return data;
    } catch (err) {
        console.error(err);
    }
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
    try {
        const {data} = await $host.get('/api/brand' + "/" + id)
        return data;
    } catch (err) {
        console.error(err);
    }
}

export const deleteOneBrand = async (id: string) => {
    try {
        const {data} = await $authHost.delete('/api/brand' + '/' + id)
        return data;
    } catch (err) {
        console.error(err);
    }
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

export const deleteOneDevice = async (id: string) => {
    try {
        const {data} = await $authHost.delete('/api/device' + '/' + id)
        return data;
    } catch (err) {
        console.error(err);
    }
}

export const fetchFavoriteDevices = async () => {
    const {data} = await $authHost.get('/api/favorite' + '/');
    return data;
}

export const toggleFavoriteDevice = async (deviceId: string) => {
    const {data} = await $authHost.post('/api/favorite', {deviceId})
    return data;
}

export const fetchReviews = async (deviceId: string) => {
    const {data} = await $host.get('/api/review' + '/' + deviceId);
    return data;
}

export const createReview = async (deviceId: string, rate: number, comment: string) => {
    const {data} = await $authHost.post('/api/review', {deviceId, rate, comment});
    return data;
}

export const deleteReview = async (reviewId: string) => {
    const {data} = await $authHost.delete('/api/review' + '/' + reviewId);
    return data;
}