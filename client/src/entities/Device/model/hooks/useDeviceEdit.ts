import { useActions, useAppSelector, useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeviceFormProps } from "../types/DeviceFormProps";
import { typeSelector } from "@/entities/Type";
import { brandSelector } from "@/entities/Brand";
import { deviceEntries } from "../config/deviceEntries";
import { updateDevice } from "../../api/deviceApi";
import { DeviceYupSchema } from "../libs/DeviceYupSchema";

export const useDeviceEdit = () => {
    
    const brands = useAppSelector(brandSelector.brands);
    const types = useAppSelector(typeSelector.types);
    const { fetchAllDevices } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<DeviceFormProps>({
        resolver: yupResolver(DeviceYupSchema)
    });

    const { handleSubmit } = form;

    const handleUpdateDevice = async (id: string, data: DeviceFormProps) => {
        try {
            const formData = new FormData();
            deviceEntries.forEach((key) => {
                formData.append(key, String(data[key]))
            })

            if (data.img) {
                formData.append("img", data.img)
            }

            await updateDevice(id, formData);
            fetchAllDevices();
            notifySuccess("Устройство обновлено.")
        } catch (err) {
            notifyError("Ошибка при обновлении.")
            console.log(err);
        }
    }

    return {
        form,
        brands,
        types,
        handleUpdateDevice,
        handleSubmit,
    }
}