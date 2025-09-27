import { useActions, useNotification } from "@/shared/hooks";
import { IBrand, IDropdownItem } from "@/shared/types";
import { deleteOneBrand } from "../../api/brandApi";

export const useBrandActions = (brand: IBrand): IDropdownItem[] => {

    const { fetchAllBrands } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const handleDelete = async () => {
        try {
            await deleteOneBrand(brand.id);
            fetchAllBrands();
            notifySuccess("Бренд удален.")
        } catch (err) {
            notifyError("Ошибка при удалении.")
        }
    }

    return [
        {
            text: "Редактировать",
            route: `${brand.id}/edit`
        },
        {
            text: "Удалить",
            onClick: handleDelete
        }
    ]
}