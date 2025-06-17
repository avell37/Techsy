import * as yup from 'yup';
import { regExpEmail } from '@/shared/config/regExpConsts';

export const ProfileYupSchema = (edit: string | undefined) => {
    switch (edit) {
        case 'username':
            return yup.object({
                username: yup.string().required('Введите имя').min(3, 'Имя слишком короткое'),
            }) as yup.ObjectSchema<{ username: string }>;
        case 'email':
            return yup.object({
                email: yup.string().required('Введите email').matches(regExpEmail, 'Некорректный email')
            }) as yup.ObjectSchema<{ email: string }>;
        case 'password':
            return yup.object({
                oldPassword: yup.string().required('Введите старый пароль').min(4, 'Пароль должен содержать минимум 4 символа'),
                newPassword: yup.string().required('Введите новый пароль').min(4, 'Пароль должен содержать минимум 4 символа'),
                repeatPassword: yup.string().required('Повторите новый пароль').oneOf([yup.ref('newPassword')], 'Пароли не совпадают')
            }) as yup.ObjectSchema<{ oldPassword: string; newPassword: string; repeatPassword: string; }>
        default:
            return yup.object();
    }
}