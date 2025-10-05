import { useActions, useNotification } from "@/shared/hooks";
import { IDevice, IDropdownItem } from "@/shared/types";
import { deleteOneDevice } from "../../api/deviceApi";

export const useDeviceActions = (device: IDevice): IDropdownItem[] => {

    const { fetchAllDevices } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const handleDelete = async () => {
        try {
            await deleteOneDevice(device.id);
            fetchAllDevices();
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