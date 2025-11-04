import { $authHost, $host } from "@/shared/api";
import { setToken } from "@/shared/lib";
import { jwtDecode } from "jwt-decode";

export const registration = async (username: string, email: string, password: string) => {
    const { data } = await $host.post('api/auth/registration',
        { username, email, password, role: 'Admin' })
    setToken('token', data.token);
    return jwtDecode(data.token);
}

export const login = async (email: string, password: string) => {
    const { data } = await $host.post('api/auth/login', { email, password })
    setToken('token', data.token);
    return jwtDecode(data.token);
}

export const checkAuth = async () => {
    const { data } = await $authHost.get('/api/auth/check');
    setToken('token', data.token);
    return jwtDecode(data.token);
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