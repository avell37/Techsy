import * as yup from 'yup';
import { regExpEmail } from '@/shared/config/regExpConsts';

export const LoginYupSchema = yup.object().shape({
    email: yup.string().trim().required('Обязательное поле').matches(regExpEmail, 'Некорректный email'),
    password: yup.string().required('Обязательное поле'),
})