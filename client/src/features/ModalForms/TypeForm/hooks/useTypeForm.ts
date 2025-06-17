import { useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { TypeYupSchema } from "../lib/TypeYupSchema";
import { createType } from "@/entities";
import { AxiosError } from "axios";

export const useTypeForm = (onClose?: () => void) => {
    const { notifySuccess, notifyWarn, notifyError } = useNotification();

    const { control, handleSubmit, reset, setError,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(TypeYupSchema),
        defaultValues: {
            type: ''
        }
    });

    const handleTypeFormSubmit = async (data: { type: string }) => {
        try {
            if (data.type.length <= 0) {
                return notifyWarn("Поле обязательно для заполнения");
            }
            await createType(data.type);
            reset();
            if (onClose) onClose();
            notifySuccess("Отлично! Тип уже на сайте!");
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            const message = error.response?.data?.message || "Ошибка. Пожалуйста, попробуйте еще раз.";
            if (message.includes("Данный тип уже существует.")) {
                setError("type", {
                    type: "server",
                    message,
                })
            } else {
                notifyError("Ошибка... Попробуй еще раз :)");
            }
        };
    }

    return {
        handleTypeFormSubmit,
        control,
        handleSubmit,
        errors
    }
}