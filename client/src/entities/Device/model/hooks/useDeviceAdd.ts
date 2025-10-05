import { useActions, useAppSelector, useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createDevice } from "../../api/deviceApi";
import { DeviceYupSchema } from "../libs/DeviceYupSchema";
import { deviceEntries } from "../config/deviceEntries";
import { brandSelector } from "@/entities/Brand";
import { typeSelector } from "@/entities/Type";
import { DeviceFormProps } from "../types/DeviceFormProps";

export const useDeviceAdd = () => {
    const brands = useAppSelector(brandSelector.brands);
    const types = useAppSelector(typeSelector.types);
    const { fetchAllDevices } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<DeviceFormProps>({
        resolver: yupResolver(DeviceYupSchema)
    });

    const { handleSubmit } = form;

    const handleAddDevice = async (data: DeviceFormProps) => {
        try {
            const formData = new FormData();
            deviceEntries.forEach((key) => {
                formData.append(key, String(data[key]))
            })

            if (data.img) {
                formData.append("img", data.img)
            }

            console.log("=== FORM DATA CONTENTS ===");
            for (const [key, value] of formData.entries()) {
                if (value instanceof File) {
                    console.log(key, `File: ${value.name} (${value.size} bytes, ${value.type})`);
                } else {
                    console.log(key, value);
                }
            }
            console.log("=== END FORM DATA ===");
            
            await createDevice(formData);
            fetchAllDevices();
            notifySuccess("Устройство добавлено.")
        } catch (err) {
            notifyError("Ошибка при добавлении.")
            console.log(err);
        }
    }

    return {
        form,
        brands,
        types,
        handleAddDevice,
        handleSubmit,
    }
}
