import * as yup from 'yup';
import { regExpPhone } from '@/shared/config/regExpConsts';

export const ShippingYupSchema = yup.object().shape({
    firstName: yup.string().required('Введите ваше имя'),
    lastName: yup.string().required('Введите вашу фамилию'),
    phone: yup.string().required('Введите ваш номер телефона').matches(regExpPhone, 'Неверный формат номера'),
    country: yup.string().required('Введите вашу страну'),
    region: yup.string().required('Введите ваш регион/область'),
    zipCode: yup.string().required('Введите ваш почтовый индекс').matches(/^\d{6}$/, 'Почтовый индекс должен содержать ровно 6 цифр'),
    city: yup.string().required('Введите ваш город'),
    address: yup.string().required('Введите ваш адрес (пример: ул. Пушкина, д. Колотушкина. кв. 228')
})