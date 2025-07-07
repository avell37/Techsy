import { useDeleteEntity } from "./useDeleteEntity";
import { EntityKey, UseDeleteFormProps } from "../../BrandForm/types/UseDeleteFormProps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeleteYupSchema } from "../lib/DeleteYupSchema";
import { useNotification } from "@/shared/hooks";
import { handleServerFormError } from "@/shared/lib";

export const useDeleteForm = ({ entityType, onClose }: UseDeleteFormProps) => {
    const { items, remove } = useDeleteEntity(entityType);
    const { notifySuccess, notifyError, notifyWarn } = useNotification();

    const { control, handleSubmit, reset, setError,
        formState: { errors }
    } = useForm<{ entity: EntityKey }>({
        resolver: yupResolver(DeleteYupSchema),
        defaultValues: {
            entity: 'brand'
        }
    });

    const handleDeleteFormSubmit = async (data: { entity: EntityKey }) => {
        try {
            if (!data.entity) {
                return notifyWarn('Выберите то, что хотите удалить')
            }
            await remove(data.entity);
            notifySuccess("Успешно удалено!");
            reset();
            if (onClose) onClose();
        } catch (err) {
            handleServerFormError<{ entity: string }>(
                err,
                setError,
                {
                    entity: "entity"
                },
                notifyError
            )
        }
    };

    return {
        control,
        errors,
        items,
        handleDeleteFormSubmit: handleSubmit(handleDeleteFormSubmit)
    }
}