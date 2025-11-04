import { useActions, useNotification } from "@/shared/hooks";
import {
    type IBasketItem,
    decrementDevice,
    deleteDeviceFromBasket,
    incrementDevice,
} from "@/entities/Basket";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/shared/config/consts";

export const useCartDevice = (device: IBasketItem) => {
    const navigate = useNavigate();
    const { deleteFromBasket, decrementBasketDevice, incrementBasketDevice } =
        useActions();
    const { notifySuccess, notifyError } = useNotification();

    const handleDelete = async (deviceId: string) => {
        try {
            await deleteDeviceFromBasket(deviceId);
            deleteFromBasket(deviceId);
            notifySuccess("Товар успешно удален из корзины");
        } catch (err) {
            console.error(err);
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

    const handleNavigate = () =>
        navigate(DEVICE_ROUTE + "/" + device.device.id);
    const handleDecrementDevice = () =>
        handleDecrement(device.device.id, device.quantity);
    const handleIncrementDevice = () => handleIncrement(device.device.id);
    const handleDeleteCartDevice = () => handleDelete(device.device.id);

    return {
        handleNavigate,
        handleDecrementDevice,
        handleIncrementDevice,
        handleDeleteCartDevice,
    };
};
