import { getToken } from "../../lib/tokenService/tokenService";
import { addDeviceToBasket, basketSelector } from "@/entities/Basket";
import { useNotification } from "../useNotification/useNotification";
import { useAppSelector } from "../useAppSelector/useAppSelector";
import { BASKET_ROUTE } from "@/shared/config/consts";
import { useNavigate } from "react-router-dom";
import { useActions } from "../useActions/useActions";

export const useAddToBasket = () => {
    const { notifyError, notifySuccess, notifyWarn } = useNotification();
    const basket = useAppSelector(basketSelector.basket);
    const navigate = useNavigate();
    const { fetchBasket } = useActions();

    const checkInBasket = (deviceId: string) => {
        return basket.some((item) => item.deviceId === deviceId)
    }

    const addToBasket = async (id: string) => {
        try {
            if (!getToken('token')) return notifyError("Чтобы добавить товар в корзину, необходимо авторизоваться");
            if (!id) return notifyWarn("Не удалось добавить товар в корзину");
            if (checkInBasket(id)) {
                navigate(BASKET_ROUTE)
                return;
            }
            await addDeviceToBasket(id);
            await fetchBasket();
            notifySuccess("Товар успешно добавлен в корзину");
        } catch (err) {
            console.log(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    }

    return { addToBasket, checkInBasket };
};