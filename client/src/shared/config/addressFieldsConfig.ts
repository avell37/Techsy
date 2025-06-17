import { IShipping } from "../types";

export const addressFieldsConfig: { name: keyof IShipping; placeholder: string }[] = [
    { name: "firstName", placeholder: "Имя" },
    { name: "lastName", placeholder: "Фамилия" },
    { name: "phone", placeholder: "Телефон" },
    { name: "country", placeholder: "Страна" },
    { name: "region", placeholder: "Регион/область" },
    { name: "zipCode", placeholder: "Индекс" },
    { name: "city", placeholder: "Город" },
    { name: "address", placeholder: "Адрес" },
];