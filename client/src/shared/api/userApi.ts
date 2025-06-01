import { $authHost, $host } from "./index";
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { IUser } from "../types/IUser";

export const registration = async (username: string, email: string, password: string) => {
    try {
        const {data} = await $host.post('api/user/registration', 
            {username, email, password, role: 'Admin'})
        Cookies.set('token', data.token);
        return jwtDecode(data.token);
    } catch (err) {
        console.error(err);
    }
}

export const login = async (email: string, password: string) => {
    try {
        const {data} = await $host.post('api/user/login', {email, password})
        Cookies.set('token', data.token);
        return jwtDecode(data.token);
    } catch (err) {
        console.error(err);
    }
}

export const checkAuth = async () => {
    try {
        const {data} = await $authHost.get('/api/user/auth');
        Cookies.set('token', data.token);
        return jwtDecode(data.token);
    } catch (err) {
        console.error(err);
    }
}

export const fetchUserData = async () => {
    try {
        const {data} = await $authHost.get('/api/user/user');
        Cookies.set('token', data.token);
        return jwtDecode<IUser>(data.token);
    } catch (err) {
        console.error(err);
    }
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
    try {
        const formData = new FormData();
        formData.append('avatar', file);

        const {data} = await $authHost.post('/api/user/avatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });

        Cookies.set('token', data.token);
        return jwtDecode<IUser>(data.token);
    } catch (err) {
        console.error(err);
    }
}

export const loginWithOAuth = async (code: string) => {
    if (!code) {
        console.error("Непридвиденная ошибка")
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

export const getShippingInfo = async () => {
    try {
        const {data} = await $authHost.get('/api/user/info');
        return data;
    } catch (err) {
        console.error(err);
    }
}

export const saveShippingInfo = async (info: object) => {
    try {
        const {data} = await $authHost.post('/api/user/info', info);
        return data;
    } catch (err) {
        console.error(err);
    }
}