import * as yup from 'yup';
import { EntityKey } from '../../BrandForm/types/UseDeleteFormProps';

export const DeleteYupSchema = yup.object().shape({
    entity: yup.mixed<EntityKey>()
        .required("Обязательное поле"),
})