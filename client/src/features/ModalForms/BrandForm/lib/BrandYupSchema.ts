import * as yup from 'yup';

export const BrandYupSchema = yup.object().shape({
    brand: yup.string().required('Введите бренд').min(2, 'Бренд должен содержать минимум 2 символа')
})