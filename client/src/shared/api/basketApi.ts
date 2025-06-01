import { $authHost } from ".";

export const addDeviceToBasket = async (deviceId: string) => {
    const {data} = await $authHost.post('/api/basket/add', {deviceId});
    return data; 
}

export const getBasket = async () => {
    const {data} = await $authHost.get('/api/basket');
    return data;
}

export const deleteDeviceFromBasket = async (deviceId: string) => {
    const {data} = await $authHost.delete('/api/basket' + '/' + deviceId);
    return data;
}

export const incrementDevice = async (deviceId: string) => {
    const {data} = await $authHost.post('/api/basket/increment', {deviceId});
    return data;
}

export const decrementDevice = async (deviceId: string) => {
    const {data} = await $authHost.post('/api/basket/decrement', {deviceId});
    return data;
}