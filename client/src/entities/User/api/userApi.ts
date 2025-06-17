import { $authHost, $host } from "@shared/api";
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { IUser } from "@shared/types/IUser";

const cookieOptions = {
    secure: false,
    sameSite: 'Strict' as const,
    path: '/',
};

export const registration = async (username: string, email: string, password: string) => {
    const { data } = await $host.post('api/user/registration',
        { username, email, password, role: 'Admin' })
    Cookies.set('token', data.token, cookieOptions);
    return jwtDecode(data.token);
}

export const login = async (email: string, password: string) => {
    const { data } = await $host.post('api/user/login', { email, password })
    Cookies.set('token', data.token, cookieOptions);
    return jwtDecode(data.token);
}

export const checkAuth = async () => {
    try {
        const { data } = await $authHost.get('/api/user/auth');
        Cookies.set('token', data.token, cookieOptions);
        return jwtDecode(data.token);
    } catch (err) {
        console.error(err);
    }
}

export const fetchUserData = async () => {
    try {
        const { data } = await $authHost.get('/api/user/user');
        Cookies.set('token', data.token, cookieOptions);
        return jwtDecode<IUser>(data.token);
    } catch (err) {
        console.error(err);
    }
}

export const changeUsername = async (username: string) => {
    const { data } = await $authHost.patch('/api/user/change-username', { username });
    Cookies.set('token', data.token, cookieOptions);
    return jwtDecode<IUser>(data.token);
}

export const changeEmail = async (email: string) => {
    const { data } = await $authHost.patch('/api/user/change-email', { email });
    Cookies.set('token', data.token, cookieOptions);
    return jwtDecode<IUser>(data.token);
}

export const changePassword = async (oldPassword: string, newPassword: string) => {
    const { data } = await $authHost.patch('/api/user/change-password', { oldPassword, newPassword });
    Cookies.set('token', data.token, cookieOptions);
    return jwtDecode<IUser>(data.token);
}

export const uploadAvatar = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('avatar', file);

        const { data } = await $authHost.post('/api/user/avatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });

        Cookies.set('token', data.token, cookieOptions);
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
        const { data } = await $host.post('/api/auth/google', { code })
        Cookies.set('token', data.token, cookieOptions);
        return jwtDecode(data.token);
    } catch (err) {
        console.error(err);
    }
}