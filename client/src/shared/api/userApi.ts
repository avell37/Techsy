import { $authHost, $host } from "./index";
import {jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';
import { IUser } from "../types/IUser";

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

export const fetchUserData = async () => {
    const {data} = await $authHost.get('/api/user/user');
    Cookies.set('token', data.token);
    return jwtDecode<IUser>(data.token);
}

export const changeUserData = async (username: string, email: string) => {
    try {
        const {data} = await $authHost.patch('/api/user/update', {username, email});
        Cookies.set('token', data.token);
        return jwtDecode(data.token);
    } catch (err) {
        console.log(err);
    }
}

export const uploadAvatar = async (file: File) => {
    const formData = new FormData();
    formData.append('avatar', file);

    const {data} = await $authHost.post('/api/user/avatar', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    });

    Cookies.set('token', data.token);
    return jwtDecode<IUser>(data.token);
}

export const loginWithOAuth = async (code: string) => {
    if (!code) {
        console.error('Нет кодика - пошел нахуй')
        return;
    }
    try {
        const {data} = await $host.post('/api/auth/google', {code})
        Cookies.set('token', data.token);
        return jwtDecode(data.token);
    } catch(err) {
        console.error(err);
    }
}