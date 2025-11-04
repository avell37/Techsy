import { deleteOneBrand, type IBrand } from "@/entities/Brand";
import { useActions, useNotification } from "@/shared/hooks";
import type { IDropdownItem } from "@/shared/ui/custom/Dropdown";

export const useBrandActions = (brand: IBrand): IDropdownItem[] => {
    const { fetchAllBrands } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const handleDelete = async () => {
        try {
            await deleteOneBrand(brand.id);
            await fetchAllBrands();
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