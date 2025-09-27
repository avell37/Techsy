import { useActions, useNotification } from "@/shared/hooks";
import { IDropdownItem, IType } from "@/shared/types";
import { updateType } from "../../api/typeApi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TypeEditYupSchema } from "../libs/TypeEditYupSchema";
import { TypeFormProps } from "../types/TypeFormProps";

export const useTypeEdit = () => {

    const { fetchAllTypes } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<TypeFormProps>({
        resolver: yupResolver(TypeEditYupSchema)
    });

    const { register, handleSubmit, formState: { errors } } = form;

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
        register,
        errors,
        handleUpdateType,
        handleSubmit,
    }
}