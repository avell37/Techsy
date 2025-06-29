import { StarIcon } from "@/shared/assets";
import { Button } from "@/shared/ui";
import { DeviceLike } from "@/entities";
import { DevicePageInfoSchema } from "../../model/types/DevicePageSchema";
import { useNavigate } from "react-router-dom";
import { useAddToBasket } from "@/shared/hooks";

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
        <div className="flex border-1 rounded-2xl border-primary-900/30 
            max-w-[600px] w-full card-inner-gradient backdrop-blur-sm p-8">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex justify-between items-start">
                    <div className="space-y-2">
                        <h1 className="text-white font-bold text-3xl tracking-tight">
                            {device?.name}
                        </h1>
                        <div className="flex items-center gap-2">
                            {device?.Type?.name && (
                                <span className="px-3 py-1 rounded-full bg-indigo-900/30 text-light-purple text-sm">
                                    {device?.Type?.name}
                                </span>
                            )}
                            {device?.Brand?.name && (
                                <span className="px-3 py-1 rounded-full bg-indigo-900/30 text-light-purple text-sm">
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
                    <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold text-white">
                            {device?.price.toLocaleString()} ₽
                        </span>
                        <span className="text-light-purple/70 text-sm mb-1">
                            Цена с НДС
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            className="flex-1 h-12 bg-primary-900 hover:bg-light-purple text-white font-medium 
                            rounded-xl transition-all duration-300"
                            text={isInBasket ? "В корзине" : "Добавить в корзину"}
                            onClick={() => handleAddToCart(device.id)}
                        />
                        <div className="h-12 w-12 flex items-center justify-center border-1 border-indigo-900 rounded-xl 
                        hover:border-light-purple hover:bg-primary-300/50 transition-all duration-300 cursor-pointer">
                            <DeviceLike
                                className="cursor-pointer"
                                isFavorite={isFavorite}
                                onClick={toggleFavorites}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
