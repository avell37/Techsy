import { toggleFavoriteDevice } from "@/shared/api/deviceApi";
import { addFavorite, removeFavorite, toggleFavoritesSchema } from "@/features/Favorites";
import Cookies from "js-cookie";

export const toggleFavorites = async ({device, notifySuccess, notifyError, dispatch}: toggleFavoritesSchema) => {
    try {
        if (!Cookies.get("token")) return notifyError("Чтобы добавить устройство в избранное, необходимо авторизоваться");
        const data = await toggleFavoriteDevice(device.id);
        if (data.added) {
            dispatch(addFavorite(data.favoriteDevice))
            notifySuccess("Добавлено в избранное")
        }
        if (data.removed) {
            dispatch(removeFavorite(device.id))
            notifySuccess('Убрано из избранного')
        }
    } catch (err) {
        console.error(err);
        notifyError("Что-то пошло не так... Попробуй еще раз :)");
    }
};
