import React from "react";
import { Button } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/shared/config/consts";
import { DeviceCardProps, DeviceRating, DeviceLike, DeviceImg } from "@entities/Device";

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
        <div
            onClick={(e) => handleNavigateToDevice(e)}
            className="relative flex flex-col justify-between items-center max-w-[275px] 
            min-h-[300px] w-full border border-indigo-900 rounded-xl hover:border-light-purple
            hover:bg-primary-300/30 transition-all"
        >
            <div className="relative flex w-full">
                <DeviceLike
                    className="absolute top-[5px] left-1 cursor-pointer hover:stroke-light-purple"
                    isFavorite={isFavorite}
                    onClick={onClick}
                />
                <DeviceRating
                    rating={device.rating}
                    iconClass="absolute top-[6px] right-[18px] fill-yellow"
                    spanClass="absolute top-[6px] right-2 text-white text-sm"
                />
            </div>
            <div className="flex justify-center items-center py-2">
                <DeviceImg
                    name={device.name}
                    img={device.img}
                    className="object-contain w-[150px] h-[150px] mt-6 mb-2 text-white"
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
                    className="rounded-md w-full h-[40px] text-center border border-indigo-900 text-white 
                    hover:border-light-purple hover:bg-primary-300/50 transition-all cursor-pointer"
                    text={isInBasket ? "В корзину" : "Добавить в корзину"}
                    onClick={addToBasket}
                />
            </div>
        </div>
    );
});