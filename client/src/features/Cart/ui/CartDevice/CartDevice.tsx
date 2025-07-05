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
    const { deleteFromBasket, decrementBasketDevice, incrementBasketDevice } =
        useActions();
    const { notifySuccess, notifyError } = useNotification();
    const navigate = useNavigate();

    const handleNavigate = () =>
        navigate(DEVICE_ROUTE + "/" + device.device.id);

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

    const handleDecrementDevice = () =>
        handleDecrement(device.device.id, device.quantity);
    const handleIncrementDevice = () => handleIncrement(device.device.id);
    const handleDeleteCartDevice = () => handleDelete(device.device.id);

    return (
        <div
            className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between 
            w-full p-4 border-[2px] border-indigo-900 rounded-xl 
            hover:border-light-purple hover:bg-primary-300/30 transition-all duration-300"
        >
            <div
                className="flex flex-1 gap-4 items-center cursor-pointer w-full"
                onClick={handleNavigate}
            >
                <div className="relative min-w-[75px] w-[75px] sm:w-[100px] h-[75px] sm:h-[100px]">
                    <DeviceImg
                        className="object-contain w-full h-full rounded-lg"
                        img={device.device.img}
                        name={device.device.name}
                    />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                    <h3 className="text-white text-sm sm:text-base font-medium line-clamp-2">
                        {device.device.name}
                    </h3>
                    <p className="text-light-purple text-sm sm:text-base font-semibold">
                        {device.device.price} Р.
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto">
                <div className="flex items-center justify-center flex-1 sm:flex-none">
                    <div className="flex items-center border border-light-purple rounded-lg bg-primary-300/20 p-1">
                        <Button
                            onClick={handleDecrementDevice}
                            className="p-1 hover:bg-primary-300/40 rounded-md transition-all duration-300"
                        >
                            <MinusIcon
                                width="20px"
                                height="20px"
                                className="stroke-white"
                            />
                        </Button>
                        <span className="text-white min-w-[40px] text-center">
                            {device.quantity}
                        </span>
                        <Button
                            onClick={handleIncrementDevice}
                            className="p-1 hover:bg-primary-300/40 rounded-md transition-all duration-300"
                        >
                            <PlusIcon
                                width="20px"
                                height="20px"
                                className="stroke-white"
                            />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <DeviceLike
                        className="cursor-pointer"
                        isFavorite={isFavorite}
                        onClick={onClick}
                    />
                    <Button
                        className="cursor-pointer p-2 hover:bg-primary-300/20 rounded-lg transition-all duration-300"
                        onClick={handleDeleteCartDevice}
                    >
                        <XMarkIcon className="stroke-white w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};
