import {
    decrementDevice,
    deleteDeviceFromBasket,
    incrementDevice,
} from "@/entities/Basket";
import { PlusIcon, XMarkIcon, MinusIcon } from "@/shared/assets";
import { useNotification } from "@/shared/hooks";
import { Button } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/shared/config/consts";
import { CartDeviceSchema } from "../../model/types/CartSchema";
import { DeviceImg, DeviceLike } from "@/entities/Device";
import { useActions } from "@/shared/hooks";

export const CartDevice = ({
    device,
    isFavorite,
    onClick,
}: CartDeviceSchema) => {
    const { deleteFromBasket, decrementBasketDevice, incrementBasketDevice } = useActions();
    const { notifySuccess, notifyError } = useNotification();
    const navigate = useNavigate();

    const handleNavigate = () => navigate(DEVICE_ROUTE + "/" + device.device.id);

    const handleDelete = async (deviceId: string) => {
        try {
            await deleteDeviceFromBasket(deviceId);
            deleteFromBasket(deviceId)
            notifySuccess("Товар успешно удален из корзины");
        } catch (err) {
            console.log(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    const handleIncrement = async (deviceId: string) => {
        try {
            await incrementDevice(deviceId);
            incrementBasketDevice(deviceId)
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
            decrementBasketDevice(deviceId)
        } catch (err) {
            console.error(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    const handleDecrementDevice = () => handleDecrement(device.device.id, device.quantity);
    const handleIncrementDevice = () => handleIncrement(device.device.id);
    const handleDeleteCartDevice = () => handleDelete(device.device.id);

    return (
        <div
            className="relative flex items-center justify-between
            min-h-[130px] w-full border-[2px] border-indigo-900 rounded-xl hover:border-light-purple
            hover:bg-primary-300/30 transition-all"
        >
            <div
                className="flex gap-[20px] w-full cursor-pointer"
                onClick={handleNavigate}
            >
                <div className="flex justify-center items-center w-full">
                    <DeviceImg
                        className="object-contain w-[75px] h-[75px]"
                        img={device.device.img}
                        name="device"
                    />
                </div>
                <div className="flex flex-col justify-center min-w-[300px]">
                    <p className="text-white">{device.device.name}</p>
                    <p className="text-light-purple">{device.device.price} Р.</p>
                </div>
            </div>
            <div className="flex justify-around items-center h-full w-full">
                <div className="flex items-center border border-light-purple rounded-lg gap-[10px] p-[2px]">
                    <Button
                        onClick={handleDecrementDevice}
                    >
                        <MinusIcon
                            width="25px"
                            height="20px"
                            className="stroke-white cursor-pointer"
                        />
                    </Button>
                    <span className="text-white">{device.quantity}</span>
                    <Button
                        onClick={handleIncrementDevice}
                    >
                        <PlusIcon
                            width="20px"
                            height="20px"
                            className="stroke-white cursor-pointer"
                        />
                    </Button>
                </div>
            </div>
            <DeviceLike
                className="absolute top-[7px] right-10 cursor-pointer"
                isFavorite={isFavorite}
                onClick={onClick}
            />
            <Button
                className="absolute top-2 right-2 cursor-pointer"
                onClick={handleDeleteCartDevice}
            >
                <XMarkIcon
                    width="22px"
                    height="22px"
                    className="stroke-white"
                />
            </Button>
        </div>
    );
};
