import { Button, Divider } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { useAddToBasket } from "@/shared/hooks";
import { Heart } from "lucide-react";
import type { DevicePageSchema } from "@/entities/Device";

export const DevicePageInfo = ({
    device,
    isFavorite,
    toggleFavorites,
}: DevicePageSchema) => {
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