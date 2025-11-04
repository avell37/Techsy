import * as yup from 'yup';

export const ReviewYupSchema = yup.object().shape({
    rate: yup
        .number()
        .typeError('Должно быть числом').
        required('Оцените товар от 1 до 5'),
    comment: yup
        .string()
        .required('Опишите плюсы и минусы этого устройства')
        .min(100, 'Минимальное количество символов - 100')
        .max(500, 'Максимальное количество символов - 500'),
})