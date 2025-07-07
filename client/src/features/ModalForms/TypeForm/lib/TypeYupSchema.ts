import * as yup from 'yup';

export const TypeYupSchema = yup.object().shape({
    type: yup.string().required('Введите тип').min(2, 'Тип должен содержать минимум 2 символа')
})