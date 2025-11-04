import * as yup from "yup";

export const usernameSchema = yup.object({
    username: yup
        .string()
        .required("Введите имя пользователя")
        .min(3, "Имя пользователя должно содержать минимум 3 символа")
        .max(20, "Имя пользователя должно содержать максимум 20 символов"),
});

export const emailSchema = yup.object({
    email: yup
        .string()
        .required("Введите email адрес")
        .email("Некорректный email адрес"),
});

export const passwordSchema = yup.object({
    oldPassword: yup.string().required("Введите старый пароль"),
    newPassword: yup
        .string()
        .required("Введите новый пароль")
        .min(4, "Пароль должен содержать минимум 4 символа"),
    repeatPassword: yup
        .string()
        .required("Повторите новый пароль")
        .oneOf([yup.ref("newPassword")], "Пароли должны совпадать"),
});
