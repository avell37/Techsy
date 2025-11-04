import { useActions, useNotification } from "@/shared/hooks";
import { deleteOneDevice, type IDevice } from "@/entities/Device";
import type { IDropdownItem } from "@/shared/ui/custom";

export const useDeviceActions = (device: IDevice): IDropdownItem[] => {
    const { fetchAllDevices } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const handleDelete = async () => {
        try {
            await deleteOneDevice(device.id);
            await fetchAllDevices();
            notifySuccess("Товар удален.")
        } catch (err) {
            notifyError("Ошибка при удалении.")
        }
    }

    return [
        {
            text: "Редактировать",
            route: `${device.id}/edit`
        },
        {
            text: "Удалить",
            onClick: handleDelete
        }
    ]
}