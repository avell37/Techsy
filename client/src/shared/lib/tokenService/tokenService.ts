import Cookies, { CookieAttributes } from "js-cookie";

const defaultCookieOptions: CookieAttributes = {
    secure: false,
    sameSite: 'Strict',
    path: '/',
};

export const getToken = (name: string) => {
    return Cookies.get(name);
};

export const setToken = (name: string, data: string, options: CookieAttributes = {}) => {
    return Cookies.set(name, data, { ...defaultCookieOptions, ...options });
};

export const removeToken = (name: string) => {
    return Cookies.remove(name, { path: '/' });
}