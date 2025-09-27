import * as yup from 'yup';

export const TypeAddYupSchema = yup.object().shape({
    name: yup
        .string()
        .required('Тип обязателен для заполнения')
        .min(3, 'Тип должен содержать не менее 3 символов.')
        .max(24, 'Тип должен содержать не более 24 символов.')
});