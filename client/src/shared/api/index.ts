import axios, { InternalAxiosRequestConfig } from 'axios';
import { getToken } from '../lib';

const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

const $authHost = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = getToken('token');
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}