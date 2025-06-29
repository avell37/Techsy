import { toggleFavoriteDevice } from "@/entities/Favorites";
import { getToken } from "../../lib/tokenService/tokenService";
import { useActions, useNotification } from "@/shared/hooks";

export const useToggleFavorites = () => {
    const { addFavorite, removeFavorite } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const toggleFavorites = async (deviceId: string) => {
        try {
            if (!getToken('token')) return notifyError("Чтобы добавить устройство в избранное, необходимо авторизоваться");
            const data = await toggleFavoriteDevice(deviceId);
            if (data.added) {
                addFavorite(data.favoriteDevice)
                notifySuccess("Добавлено в избранное")
            }
            if (data.removed) {
                removeFavorite(deviceId)
                notifySuccess('Убрано из избранного')
            }
        } catch (err) {
            console.error(err);
            notifyError("Что-то пошло не так... Попробуй еще раз :)");
        }
    }

    return { toggleFavorites };
};
