import { useActions, useNotification } from "@/shared/hooks";
import { IDropdownItem, IType } from "@/shared/types";
import { deleteOneType } from "../../api/typeApi";

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