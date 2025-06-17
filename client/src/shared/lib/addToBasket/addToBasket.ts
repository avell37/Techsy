import Cookies from "js-cookie";
import { AddToBasketSchema } from "./types/addToBasketSchema";
import { addDeviceToBasket } from "@/entities/Basket/api/basketApi";

export const addToBasket = async ({ id, notifySuccess, notifyWarn, notifyError }: AddToBasketSchema) => {
    try {
        if (!Cookies.get('token')) return notifyError("Чтобы добавить товар в корзину, необходимо авторизоваться");
        if (!id) return notifyWarn("Не удалось добавить товар в корзину");
        await addDeviceToBasket(id);
        notifySuccess("Товар успешно добавлен в корзину");
    } catch (err) {
        console.log(err);
        notifyError("Произошла ошибка... Попробуй еще раз :)");
    }
};