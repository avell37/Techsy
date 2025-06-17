import { useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { BrandYupSchema } from "../lib/BrandYupSchema";
import { createBrand } from "@/entities";
import { AxiosError } from "axios";

export const useBrandForm = (onClose?: () => void) => {
    const { notifySuccess, notifyWarn, notifyError } = useNotification();

    const { control, handleSubmit, reset, setError,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(BrandYupSchema),
        defaultValues: {
            brand: ''
        }
    });

    const handleBrandFormSubmit = async (data: { brand: string }) => {
        try {
            if (data.brand.length <= 0) {
                return notifyWarn("Поле обязательно для заполнения");
            }
            await createBrand(data.brand);
            reset();
            if (onClose) onClose();
            notifySuccess("Отлично! Бренд уже на сайте!");
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            const message = error.response?.data?.message || "Ошибка. Пожалуйста, попробуйте еще раз.";
            if (message.includes("Данный бренд уже существует.")) {
                setError("brand", {
                    type: "server",
                    message,
                })
            } else {
                notifyError("Ошибка... Попробуй еще раз :)");
            }
        }
    };

    return {
        control,
        handleSubmit,
        errors,
        handleBrandFormSubmit
    }
}