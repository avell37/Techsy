import { Button, Divider } from "@/shared/ui";
import { DevicePageInfoSchema } from "../../../model/types/DevicePageSchema";
import { useNavigate } from "react-router-dom";
import { useAddToBasket } from "@/shared/hooks";
import { Heart } from "lucide-react";

export const DevicePageInfo = ({
    device,
    isFavorite,
    toggleFavorites,
}: DevicePageInfoSchema) => {
    const { addToBasket, checkInBasket } = useAddToBasket();
    const navigate = useNavigate();

    if (!device) return null;

    const isInBasket = checkInBasket(device.id)

    const handleAddToCart = (deviceId: string) => {
        if (checkInBasket(deviceId)) navigate('/basket');
        addToBasket(deviceId);
    }

    return (
        <div className="flex flex-col bg-gradient p-8 rounded-xl h-full">
            <div className="flex flex-col gap-6">
                <h1 className="text-white font-bold text-4xl">{device.name}</h1>
                <span className="text-white">{device.price.toLocaleString()} ₽</span>
                {device?.description && (
                    <div className="flex flex-col gap-6">
                        <Divider variant="h-[2px]" />
                            <p className="text-gray-400 text-sm break-all">{device.description}</p>
                        <Divider variant="h-[2px]" />
                    </div>
                )}
                <span className="text-white">Тип: {device.Type?.name}</span>
                <span className="text-white">Бренд: {device.Brand?.name}</span>
                <span className="text-white">Цвет: {device?.color}</span>
                <span className="text-white">Память: {device?.storage} ГБ</span>
                <Divider variant="h-[2px]" />
            </div>
            <div className="flex items-center gap-3 mt-4">
                <Button
                    className="flex-1 h-12 apply-button"
                    onClick={() => handleAddToCart(device.id)}
                >
                    {isInBasket ? "В корзине" : "Добавить в корзину"}
                </Button>
                <div className="h-12 w-12 flex items-center justify-center border-1 border-indigo-900 rounded-xl 
                hover:border-light-purple hover:bg-primary-300/50 transition-all duration-300 cursor-pointer">
                    <Button 
                        variant="default"
                        size="icon"
                        onClick={toggleFavorites}
                        className="p-0 w-[24px] h-[24px] flex items-center justify-center cursor-pointer hover:stroke-light-purple"
                    >
                        <Heart 
                            className={`size-6 stroke-indigo-900 transition duration-200 ease-in-out ${isFavorite ? "fill-indigo-900" : ""}`}
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
};

{/* <div className="flex border-1 rounded-2xl border-primary-900/30 
            max-w-[600px] w-full card-inner-gradient backdrop-blur-sm p-8">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex justify-between items-start max-sm:flex-col max-sm:gap-[10px]">
                    <div className="space-y-2">
                        <h1 className="text-white font-bold text-3xl tracking-tight max-sm:text-2xl">
                            {device?.name}
                        </h1>
                        <div className="flex items-center gap-2 max-sm:flex-wrap">
                            {device?.Type?.name && (
                                <span className="px-3 py-1 rounded-full bg-indigo-900/30 text-light-purple text-sm max-sm:text-xs">
                                    {device?.Type?.name}
                                </span>
                            )}
                            {device?.Brand?.name && (
                                <span className="px-3 py-1 rounded-full bg-indigo-900/30 text-light-purple text-sm max-sm:text-xs">
                                    {device?.Brand?.name}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-1 bg-indigo-900/20 px-3 py-1 rounded-xl">
                        <StarIcon
                            width="24px"
                            height="24px"
                            className="fill-yellow"
                        />
                        <span className="text-white font-semibold">
                            {device?.rating}
                        </span>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="flex items-end gap-2 max-sm:flex-col max-sm:items-start">
                        <span className="text-3xl font-bold text-white max-sm:text-2xl">
                            {device?.price.toLocaleString()} ₽
                        </span>
                        <span className="text-light-purple/70 text-sm mb-1">
                            Цена с НДС
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            className="flex-1 justify-center items-center h-12 bg-primary-900 hover:bg-light-purple text-white font-medium 
                            rounded-xl transition-all duration-300 max-sm:text-xs"
                            onClick={() => handleAddToCart(device.id)}
                        >
                            {isInBasket ? "В корзине" : "Добавить в корзину"}
                        </Button>
                        <div className="h-12 w-12 flex items-center justify-center border-1 border-indigo-900 rounded-xl 
                        hover:border-light-purple hover:bg-primary-300/50 transition-all duration-300 cursor-pointer">
                            <Button 
                                variant="default"
                                size="icon"
                                onClick={toggleFavorites}
                                className="p-0 w-[24px] h-[24px] flex items-center justify-center cursor-pointer hover:stroke-light-purple"
                            >
                                <Heart 
                                    className={`size-6 stroke-indigo-900 transition duration-200 ease-in-out ${isFavorite ? "fill-indigo-900" : ""}`}
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}