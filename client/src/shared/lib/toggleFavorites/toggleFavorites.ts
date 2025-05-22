import { toggleFavoriteDevice } from "@/shared/api/deviceApi";
import { toggleFavoritesSchema } from "../../../features/Favorites/model/types/toggleFavoritesSchema";
import { addFavorite, removeFavorite } from "@/features/Favorites";

export const toggleFavorites = async ({device, notifySuccess, notifyError, dispatch}: toggleFavoritesSchema) => {
    try {
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
