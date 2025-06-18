import * as yup from 'yup';

export const DeleteYupSchema = yup.object().shape({
    entity: yup.string().required('Выберите то, что хотите удалить')
})