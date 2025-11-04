import { useActions, useAppSelector, useNotification } from "@/shared/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeviceYupSchema } from "../validation/DeviceYupSchema";
import { brandSelector } from "@/entities/Brand";
import { typeSelector } from "@/entities/Type";
import type { DeviceFormProps } from "../types/DeviceFormProps";
import { createDevice, deviceEntries } from "@/entities/Device";

export const useDeviceAdd = () => {
    const brands = useAppSelector(brandSelector.brands);
    const types = useAppSelector(typeSelector.types);
    const { fetchAllDevices } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<DeviceFormProps>({
        resolver: yupResolver(DeviceYupSchema),
    });

    const handleAddDevice = async (data: DeviceFormProps) => {
        try {
            const formData = new FormData();
            deviceEntries.forEach((key) => {
                formData.append(key, String(data[key]));
            });

            if (data.img) {
                formData.append("img", data.img);
            }

            await createDevice(formData);
            await fetchAllDevices();
            notifySuccess("Устройство добавлено.");
        } catch (err) {
            notifyError("Ошибка при добавлении.");
            console.error(err);
        }
    };

    const onSubmit: SubmitHandler<DeviceFormProps> = (data) => {
        handleAddDevice(data);
    };

    return {
        form,
        brands,
        types,
        handleSubmit: form.handleSubmit,
        onSubmit,
    };
};
