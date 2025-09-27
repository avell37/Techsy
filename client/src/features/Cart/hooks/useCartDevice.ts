import { useActions, useNotification } from "@/shared/hooks";
import {
    decrementDevice,
    deleteDeviceFromBasket,
    incrementDevice,
} from "@/entities/Basket";

export const useCartDevice = () => {
    const { deleteFromBasket, decrementBasketDevice, incrementBasketDevice } =
        useActions();
    const { notifySuccess, notifyError } = useNotification();
    
    const handleDelete = async (deviceId: string) => {
        try {
            await deleteDeviceFromBasket(deviceId);
            deleteFromBasket(deviceId);
            notifySuccess("Товар успешно удален из корзины");
        } catch (err) {
            console.log(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    const handleIncrement = async (deviceId: string) => {
        try {
            await incrementDevice(deviceId);
            incrementBasketDevice(deviceId);
        } catch (err) {
            console.error(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    const handleDecrement = async (deviceId: string, quantity: number) => {
        if (quantity <= 1) {
            notifyError("Минимальное количество товара - 1");
            return;
        }
        try {
            await decrementDevice(deviceId);
            decrementBasketDevice(deviceId);
        } catch (err) {
            console.error(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    return {
        handleDelete,
        handleIncrement,
        handleDecrement
    }
}