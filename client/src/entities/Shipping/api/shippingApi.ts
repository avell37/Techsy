import { $authHost } from "@shared/api";

export const getShippingInfo = async () => {
    try {
        const { data } = await $authHost.get('/api/user/info');
        return data;
    } catch (err) {
        console.error(err);
    }
}

export const saveShippingInfo = async (info: object) => {
    try {
        const { data } = await $authHost.post('/api/user/info', info);
        return data;
    } catch (err) {
        console.error(err);
    }
}