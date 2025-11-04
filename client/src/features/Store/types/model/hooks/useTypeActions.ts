import { deleteOneType, type IType } from "@/entities/Type";
import { useActions, useNotification } from "@/shared/hooks";
import type { IDropdownItem } from "@/shared/ui/custom/Dropdown";

export const useTypeActions = (type: IType): IDropdownItem[] => {
    const { fetchAllTypes } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const handleDelete = async () => {
        try {
            await deleteOneType(type.id);
            fetchAllTypes();
            notifySuccess("Тип удален.")
        } catch (err) {
            notifyError("Ошибка при удалении.")
        }
    }

    return [
        {
            text: "Редактировать",
            route: `${type.id}/edit`
        },
        {
            text: "Удалить",
            onClick: handleDelete
        }
    ]
}