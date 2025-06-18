import { useDeleteEntity } from "@/features/ManageModal/hooks/useDeleteEntity";
import { UseDeleteFormProps } from "../../BrandForm/types/UseDeleteFormProps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeleteYupSchema } from "../lib/DeleteYupSchema";
import { useNotification } from "@/shared/hooks";
import { AxiosError } from "axios";

export const useDeleteForm = ({ entityType, onClose }: UseDeleteFormProps) => {
    const { items, remove } = useDeleteEntity(entityType);
    const { notifySuccess, notifyError, notifyWarn } = useNotification();

    const { control, handleSubmit, reset, setError,
        formState: { errors }
    } = useForm<{ entity: string }>({
        resolver: yupResolver(DeleteYupSchema),
        defaultValues: {
            entity: ''
        }
    });

    const handleDeleteFormSubmit = async (data: { entity: string }) => {
        try {
            if (!data.entity) {
                return notifyWarn('Выберите то, что хотите удалить')
            }
            await remove(data.entity);
            notifySuccess("Успешно удалено!");
            reset();
            if (onClose) onClose();
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            const message = error.response?.data?.message || "Ошибка. Пожалуйста, попробуйте еще раз.";
            if (message.includes("Не найден ID устройства")) {
                setError("entity", {
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
        handleDeleteFormSubmit,
        errors,
        items
    }
}