import { useActions, useAppSelector, useNotification } from "@/shared/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { DeviceFormProps } from "../types/DeviceFormProps";
import { typeSelector } from "@/entities/Type";
import { brandSelector } from "@/entities/Brand";
import { DeviceYupSchema } from "../validation/DeviceYupSchema";
import {
    deviceEntries,
    updateDevice,
    selectDeviceById,
} from "@/entities/Device";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const useDeviceEdit = () => {
    const { id } = useParams<{ id: string }>();
    const brands = useAppSelector(brandSelector.brands);
    const types = useAppSelector(typeSelector.types);
    const device = useAppSelector(selectDeviceById(id));
    const { fetchAllDevices } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<DeviceFormProps>({
        resolver: yupResolver(DeviceYupSchema),
    });

    useEffect(() => {
        if (device)
            form.reset({
                name: device.name,
                description: device.description,
                color: device.color,
                storage: device.storage,
                price: device.price,
                brandId: device.brandId,
                typeId: device.typeId,
                img: device.img,
            });
    }, [device]);

    const handleUpdateDevice = async (id: string, data: DeviceFormProps) => {
        try {
            const formData = new FormData();
            deviceEntries.forEach((key) => {
                if (key !== "img") {
                    formData.append(key, String(data[key]));
                }
            });

            if (data.img instanceof File) {
                formData.append("img", data.img);
            }

            await updateDevice(id, formData);
            await fetchAllDevices();
            notifySuccess("Устройство обновлено.");
        } catch (err) {
            notifyError("Ошибка при обновлении.");
            console.error(err);
        }
    };

    const onSubmit: SubmitHandler<DeviceFormProps> = (data) => {
        if (device) handleUpdateDevice(device.id, data);
    };

    return {
        form,
        brands,
        types,
        handleSubmit: form.handleSubmit,
        onSubmit,
    };
};
