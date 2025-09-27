import * as yup from 'yup';

export const BrandEditYupSchema = yup.object().shape({
    name: yup
        .string()
        .required('Бренд обязателен для заполнения')
        .min(3, 'Бренд должен содержать не менее 3 символов.')
        .max(24, 'Бренд должен содержать не более 24 символов.')
});