import * as yup from 'yup';
import { regExpEmail } from '@/shared/config/regExpConsts';

export const RegistrationYupSchema = yup.object().shape({
    username: yup.string().trim().required('Обязательное поле').min(3, 'Имя пользователя должно содержать минимум 3 символа'),
    email: yup.string().required('Обязательное поле').matches(regExpEmail, 'Некорректный email'),
    password: yup.string().required('Обязательное поле').min(4, 'Пароль должен содержать минимум 4 символа')
});