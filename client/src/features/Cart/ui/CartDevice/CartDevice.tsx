import { PlusIcon, XMarkIcon, MinusIcon } from "@/shared/assets";
import { Button } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/shared/config/consts";
import { CartDeviceSchema } from "../../model/types/CartSchema";
import { Heart, Minus, Plus } from "lucide-react";
import { useCartDevice } from "../../hooks/useCartDevice";

export const CartDevice = ({
    device,
    isFavorite,
    onClick,
}: CartDeviceSchema) => {
    const navigate = useNavigate();
    const { handleDecrement, handleIncrement, handleDelete } = useCartDevice();

    const handleNavigate = () =>
        navigate(DEVICE_ROUTE + "/" + device.device.id);

    const handleDecrementDevice = () =>
        handleDecrement(device.device.id, device.quantity);
    const handleIncrementDevice = () => handleIncrement(device.device.id);
    const handleDeleteCartDevice = () => handleDelete(device.device.id);

    return (
        <div
            className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between 
            w-full p-4 border border-primary-900 rounded-xl 
            hover:border-light-purple hover:bg-primary-300/30 transition-all duration-300"
        >
            <div
                className="flex flex-1 gap-4 items-center cursor-pointer w-full"
                onClick={handleNavigate}
            >
                <div className="relative min-w-[75px] w-[75px] sm:w-[100px] h-[75px] sm:h-[100px]">
                    <img
                        src={`${import.meta.env.VITE_API_URL}/uploads/${device.device.img}`}
                        alt={device.device.name}
                        className="object-contain w-[100px] mb-2 text-white"
                    />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                    <h3 className="text-white text-sm sm:text-base font-medium line-clamp-2">
                        {device.device.name}
                    </h3>
                    <p className="text-white text-sm sm:text-base font-semibold">
                        {device.device.price} Р.
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto">
                <div className="flex items-center justify-center flex-1 sm:flex-none">
                    <div className="flex items-center gap-2 border border-light-purple rounded-lg bg-primary-300/20 p-2">
                        <Button
                            variant="default"
                            size="none"
                            className="hover:bg-primary-300/40 rounded-md transition-all duration-300"
                            onClick={handleDecrementDevice}
                        >
                            <Minus className="size-4 stroke-white" />
                        </Button>
                        <span className="text-white min-w-[40px] text-center">
                            {device.quantity}
                        </span>
                        <Button
                            variant="default"
                            size="none"
                            className="hover:bg-primary-300/40 rounded-md transition-all duration-300"
                            onClick={handleIncrementDevice}
                        >
                            <Plus className="size-[14px] stroke-white" />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button 
                        variant="default"
                        size="none"
                        onClick={onClick}
                        className="absolute top-2 right-10 p-0 w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:stroke-light-purple"
                    >
                        <Heart 
                            className={`size-5 stroke-primary-900 transition duration-200 ease-in-out ${isFavorite ? "fill-primary-900" : ""}`}
                        />
                    </Button>
                    <Button
                        variant="default"
                        size="none"
                        className="absolute top-2 right-2 cursor-pointer hover:bg-primary-300/20 rounded-lg transition-all duration-300"
                        onClick={handleDeleteCartDevice}
                    >
                        <XMarkIcon className="stroke-white size-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};
