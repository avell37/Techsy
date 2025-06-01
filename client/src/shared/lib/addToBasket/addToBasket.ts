import { AddToBasketSchema } from "./types/addToBasketSchema";
import { addDeviceToBasket } from "@/shared/api/basketApi";

export const addToBasket = async ({id, notifySuccess, notifyWarn, notifyError}: AddToBasketSchema) => {
    try {
        if (!id) return notifyWarn("Не удалось добавить товар в корзину");
        await addDeviceToBasket(id);
        notifySuccess("Товар успешно добавлен в корзину");
    } catch (err) {
        console.log(err);
        notifyError("Произошла ошибка... Попробуй еще раз :)");
    }
};