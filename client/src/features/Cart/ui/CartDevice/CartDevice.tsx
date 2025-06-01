import {
    decrementBasketDevice,
    deleteFromBasket,
    incrementBasketDevice,
} from "@/entities/Basket";
import {
    decrementDevice,
    deleteDeviceFromBasket,
    incrementDevice,
} from "@/shared/api/basketApi";
import { PlusIcon, XMarkIcon, MinusIcon } from "@/shared/assets";
import { useAppDispatch, useNotification } from "@/shared/hooks";
import { Button, DeviceImg, DeviceLike } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/shared/config/consts";

export const CartDevice = ({ device, isFavorite, onClick }) => {
    const { notifySuccess, notifyError } = useNotification();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleDelete = async (deviceId: string) => {
        try {
            await deleteDeviceFromBasket(deviceId);
            dispatch(deleteFromBasket(deviceId));
            notifySuccess("Товар успешно удален из корзины");
        } catch (err) {
            console.log(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    const handleIncrement = async (deviceId: string) => {
        try {
            await incrementDevice(deviceId);
            dispatch(incrementBasketDevice(deviceId));
            notifySuccess("Количество товара увеличено");
        } catch (err) {
            console.error(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    const handleDecrement = async (deviceId: string, quantity: number) => {
        console.log("CartDevice render:", device.quantity);
        if (quantity <= 1) {
            notifyError("Минимальное количество товара - 1");
            return;
        }
        try {
            await decrementDevice(deviceId);
            dispatch(decrementBasketDevice(deviceId));
            notifySuccess("Количество товара уменьшено");
        } catch (err) {
            console.error(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    return (
        <div
            className="relative flex items-center justify-between
            min-h-[130px] w-full border-[2px] border-[#3A177F] rounded-xl hover:border-[#8A4FFF] 
            hover:bg-[#1A1238]/30 transition-all"
        >
            <div
                className="flex ml-4 gap-[20px] w-full cursor-pointer"
                onClick={() => {
                    navigate(DEVICE_ROUTE + "/" + device.device.id);
                }}
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
                    <p className="text-[#8A4FFF]">{device.device.price} Р.</p>
                </div>
            </div>
            <div className="flex justify-around items-center h-full w-full">
                <div className="flex items-center border border-[#8A4FFF] rounded-lg gap-[10px] p-[2px]">
                    <MinusIcon
                        onClick={() =>
                            handleDecrement(device.device.id, device.quantity)
                        }
                        width="25px"
                        height="20px"
                        className="stroke-[#fff] cursor-pointer"
                    />
                    <span className="text-white">{device.quantity}</span>
                    <PlusIcon
                        onClick={() => handleIncrement(device.device.id)}
                        width="20px"
                        height="20px"
                        className="stroke-[#fff] cursor-pointer"
                    />
                </div>
            </div>
            <DeviceLike
                className="absolute top-[7px] right-10"
                isFavorite={isFavorite}
                onClick={onClick}
            />
            <Button
                onClick={() => handleDelete(device.device.id)}
                className="absolute top-2 right-2"
            >
                <XMarkIcon
                    width="22px"
                    height="22px"
                    className="stroke-[#fff]"
                />
            </Button>
        </div>
    );
};
