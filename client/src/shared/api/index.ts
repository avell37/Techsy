import axios, { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

const $authHost = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get('token');
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