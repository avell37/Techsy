import { useActions, useNotification } from "@/shared/hooks";
import { createType } from "../../api/typeApi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TypeFormProps } from "../types/TypeFormProps";
import { TypeAddYupSchema } from "../libs/TypeAddYupSchema";

export const useTypeAdd = () => {

    const { fetchAllTypes } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<TypeFormProps>({
        resolver: yupResolver(TypeAddYupSchema)
    });

    const { register, handleSubmit, formState: { errors } } = form;

    const handleAddType = async (type: string) => {
        try {
            await createType(type);
            fetchAllTypes();
            notifySuccess("Тип был добавлен.")
        } catch (err) {
            notifyError("Ошибка при добавлении.")
            console.log(err);
        }
    }

    return {
        form,
        register,
        errors,
        handleAddType,
        handleSubmit,
    }
}