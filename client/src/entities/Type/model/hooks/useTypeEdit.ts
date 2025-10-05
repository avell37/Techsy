import { useActions, useNotification } from "@/shared/hooks";
import { updateType } from "../../api/typeApi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TypeFormProps } from "../types/TypeFormProps";
import { TypeYupSchema } from "../libs/TypeYupSchema";

export const useTypeEdit = () => {

    const { fetchAllTypes } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<TypeFormProps>({
        resolver: yupResolver(TypeYupSchema)
    });

    const { handleSubmit } = form;

    const handleUpdateType = async (id: string, type: string) => {
        try {
            await updateType(id, type);
            fetchAllTypes();
            notifySuccess("Тип был обновлен.")
        } catch (err) {
            notifyError("Ошибка при обновлении.")
            console.log(err);
        }
    }

    return {
        form,
        handleUpdateType,
        handleSubmit,
    }
}