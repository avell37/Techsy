import { useActions, useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { TypeYupSchema } from "../lib/TypeYupSchema";
import { createType } from "@/entities";
import { handleServerFormError } from "@/shared/lib";

export const useTypeForm = (onClose?: () => void) => {
    const { notifySuccess, notifyWarn, notifyError } = useNotification();
    const { fetchAllTypes } = useActions();

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
            fetchAllTypes();
            reset();
            if (onClose) onClose();
            notifySuccess("Отлично! Тип уже на сайте!");
        } catch (err) {
            handleServerFormError<{ type: string }>(
                err,
                setError,
                {
                    type: "type"
                },
                notifyError
            )
        };
    }

    return {
        control,
        errors,
        handleTypeFormSubmit: handleSubmit(handleTypeFormSubmit)
    }
}