import * as yup from 'yup';

export const ReviewYupSchema = yup.object().shape({
    rating: yup.number().required('Оценка обязательна').min(1, 'Минимальная оценка - 1').max(5, 'Максимальная оценка - 5'),
    review: yup.string().required('Введите отзыв').min(4, 'Отзыв должен содержать минимум 4 символа')
})