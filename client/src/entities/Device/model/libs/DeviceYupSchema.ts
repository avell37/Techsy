import * as yup from "yup";

export const DeviceYupSchema = yup.object().shape({
    name: yup.string().required('Введите название устройства'),
    description: yup
            .string()
            .required('Введите описание')
            .min(100, 'Минимальное количество символов - 100')
            .max(500, 'Максимальное количество символов - 500'),
    color: yup.string().required('Введите цвет'),
    storage: yup.number().typeError('Должно быть числом').required('Введите кол-во ГБ памяти'),
    price: yup.number().typeError('Должно быть числом').required('Введите цену'),
    brandId: yup.string().required('Выберите бренд'),
    typeId: yup.string().required('Выберите тип'),
    img: yup
        .mixed<File>()
        .nullable()
        .required('Загрузите файл')
        .test("fileRequired", "Загрузите файл", (value): value is File => {
            return value instanceof File;
        })
})