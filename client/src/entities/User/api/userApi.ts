import { $authHost, $host } from "@shared/api";
import { jwtDecode } from 'jwt-decode';
import { setToken } from "@/shared/lib";
import { IUser } from "@shared/types/IUser";

export const registration = async (username: string, email: string, password: string) => {
    const { data } = await $host.post('api/user/registration',
        { username, email, password, role: 'Admin' })
    setToken('token', data.token);
    return jwtDecode(data.token);
}

export const login = async (email: string, password: string) => {
    const { data } = await $host.post('api/user/login', { email, password })
    setToken('token', data.token);
    return jwtDecode(data.token);
}

export const checkAuth = async () => {
    try {
        const { data } = await $authHost.get('/api/user/auth');
        setToken('token', data.token);
        return jwtDecode(data.token);
    } catch (err) {
        console.error(err);
    }
}

export const fetchUserData = async () => {
    try {
        const { data } = await $authHost.get('/api/user/user');
        setToken('token', data.token);
        return jwtDecode<IUser>(data.token);
    } catch (err) {
        console.error(err);
    }
}

export const changeUsername = async (username: string) => {
    const { data } = await $authHost.patch('/api/user/change-username', { username });
    setToken('token', data.token);
    return jwtDecode<IUser>(data.token);
}

export const changeEmail = async (email: string) => {
    const { data } = await $authHost.patch('/api/user/change-email', { email });
    setToken('token', data.token);
    return jwtDecode<IUser>(data.token);
}

export const changePassword = async (oldPassword: string, newPassword: string) => {
    const { data } = await $authHost.patch('/api/user/change-password', { oldPassword, newPassword });
    setToken('token', data.token);
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

        setToken('token', data.token);
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
        setToken('token', data.token);
        return jwtDecode(data.token);
    } catch (err) {
        console.error(err);
    }
}