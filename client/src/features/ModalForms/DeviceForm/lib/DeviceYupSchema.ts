import * as yup from 'yup';
import { regExpNumbers } from '@/shared/config/regExpConsts';
import { DeviceFormState } from '../types/DeviceFormState';

export const DeviceYupSchema: yup.ObjectSchema<DeviceFormState> = yup.object({
    name: yup.string().required('Имя устройства обязательно к заполнению'),
    price: yup.string().required('Цена обязательна').matches(regExpNumbers, 'Цена должна быть числом.'),
    brandId: yup.string().required('Выберите бренд'),
    brandName: yup.string().required(),
    typeId: yup.string().required('Выберите тип'),
    typeName: yup.string().required(),
    img: yup
        .mixed<File>()
        .test("fileRequired", "Файл обязателен", (value) => {
            return value instanceof File;
        })
        .nullable()
        .required("Необходима фотография товара"),
})