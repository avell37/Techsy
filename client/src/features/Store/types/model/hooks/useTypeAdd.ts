import { useActions, useNotification } from "@/shared/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { TypeFormProps } from "../types/TypeFormProps";
import { TypeYupSchema } from "../validation/TypeYupSchema";
import { createType } from "@/entities/Type";

export const useTypeAdd = () => {
    const { fetchAllTypes } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<TypeFormProps>({
        resolver: yupResolver(TypeYupSchema),
    });

    const handleAddType = async (type: string) => {
        try {
            await createType(type);
            fetchAllTypes();
            notifySuccess("Тип был добавлен.");
        } catch (err) {
            notifyError("Ошибка при добавлении.");
            console.error(err);
        }
    };

    const onSubmit: SubmitHandler<TypeFormProps> = (data) => {
        handleAddType(data.name);
    };

    return {
        form,
        handleAddType,
        handleSubmit: form.handleSubmit,
        onSubmit,
    };
};
