import React from "react";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/shared/config/consts";
import { DeviceCardProps } from "@entities/Device";
import { Card, CardContent, CardHeader } from "@/shared/ui/ui-lib/Card/Card";
import { Button } from "@/shared/ui/ui-lib/Button/Button";
import { Heart, Star } from "lucide-react";

export const DeviceCard = React.memo(({
    device,
    onClick,
    isFavorite,
    addToBasket,
    checkInBasket
}: DeviceCardProps) => {
    const navigate = useNavigate();
    const isInBasket = checkInBasket(device.id)

    const handleNavigateToDevice = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest("button")) return;
        navigate(DEVICE_ROUTE + "/" + device.id);
    }

    return (
        <Card
            className="flex flex-col relative max-w-[275px] max-h-[300px] w-full border border-indigo-900 rounded-xl 
                hover:border-primary-900 hover:bg-primary-300/30 transition-all bg-gradient"
            onClick={(e) => handleNavigateToDevice(e)}
        >
            <CardHeader className="flex items-center justify-between px-2 pt-[2px]">
                <Button 
                    variant="default"
                    size="icon"
                    onClick={onClick}
                    className="p-0 w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:stroke-light-purple"
                >
                    <Heart 
                        className={`size-5 stroke-indigo-900 transition duration-200 ease-in-out ${isFavorite ? "fill-indigo-900" : ""}`}
                    />
                </Button>
                <div className="flex items-center">
                    <Star className="fill-yellow-500" />
                    <span className="text-white text-sm">{device.rating}</span>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex justify-center items-center">
                    <img
                        src={`${import.meta.env.VITE_API_URL}/uploads/${device.img}`}
                        alt={device.name}
                        className="object-contain w-[150px] h-[150px] mb-2 text-white"
                    />
                </div>
                <div className="flex flex-col w-full px-4 pb-2 text-white text-left gap-1">
                    <h3 className="text-sm font-semibold truncate">
                        {device.name}
                    </h3>
                    <p className="text-lg font-bold text-light-purple">
                        {device.price} ₽.
                    </p>
                </div>
                <div className="w-full px-4 pb-4">
                    <Button
                        variant="ghost"
                        className="flex justify-center rounded-md w-full h-[40px] border border-indigo-900 
                        text-white hover:border-light-purple hover:bg-primary-300/50 transition-all cursor-pointer"
                        onClick={addToBasket}
                    >
                        {isInBasket ? "В корзину" : "Добавить в корзину"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
});