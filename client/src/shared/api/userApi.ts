import { $authHost, $host } from "./index";
import {jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';

export const registration = async (username: string, email: string, password: string) => {
    const {data} = await $host.post('api/user/registration', {username, email, password, role: 'Admin'})
    Cookies.set('token', data.token);
    return jwtDecode(data.token);
}

export const login = async (email: string, password: string) => {
    const {data} = await $host.post('api/user/login', {email, password})
    Cookies.set('token', data.token);
    return jwtDecode(data.token);
}

export const checkAuth = async () => {
    const {data} = await $authHost.get('/api/user/auth');
    Cookies.set('token', data.token);
    return jwtDecode(data.token);
}