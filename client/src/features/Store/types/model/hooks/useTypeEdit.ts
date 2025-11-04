import { useActions, useAppSelector, useNotification } from "@/shared/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { TypeFormProps } from "../types/TypeFormProps";
import { TypeYupSchema } from "../validation/TypeYupSchema";
import { useParams } from "react-router-dom";
import { selectTypeById, updateType } from "@/entities/Type";
import { useEffect } from "react";

export const useTypeEdit = () => {
    const { id } = useParams<{ id: string }>();
    const { fetchAllTypes } = useActions();
    const { notifySuccess, notifyError } = useNotification();
    const type = useAppSelector(selectTypeById(id));

    const form = useForm<TypeFormProps>({
        resolver: yupResolver(TypeYupSchema),
    });

    useEffect(() => {
        if (type) form.reset({ name: type.name });
    }, [type]);

    const handleUpdateType = async (id: string, type: string) => {
        try {
            await updateType(id, type);
            fetchAllTypes();
            notifySuccess("Тип был обновлен.");
        } catch (err) {
            notifyError("Ошибка при обновлении.");
            console.error(err);
        }
    };

    const onSubmit: SubmitHandler<TypeFormProps> = (data) => {
        if (type) handleUpdateType(type.id, data.name);
    };

    return {
        form,
        type,
        handleUpdateType,
        handleSubmit: form.handleSubmit,
        onSubmit,
    };
};
