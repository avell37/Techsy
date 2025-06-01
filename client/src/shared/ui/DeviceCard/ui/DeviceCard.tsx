import { Button } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/shared/config/consts";
import { DeviceSchema, DeviceRating, DeviceLike, DeviceImg } from "@shared/ui";

export const DeviceCard = ({
    device,
    onClick,
    isFavorite,
    addToBasket,
}: DeviceSchema) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={(e) => {
                const target = e.target as HTMLElement;
                if (target.closest("button")) return;
                navigate(DEVICE_ROUTE + "/" + device.id);
            }}
            className="relative flex flex-col justify-between items-center max-w-[275px] 
            min-h-[300px] w-full border-1 border-[#3A177F] rounded-xl hover:border-[#8A4FFF] 
            hover:bg-[#1A1238]/30 transition-all"
        >
            <div className="relative flex w-full">
                <DeviceLike
                    className="absolute top-[5px] left-1"
                    onClick={onClick}
                    isFavorite={isFavorite}
                />
                <DeviceRating
                    noWrap
                    rating={device.rating}
                    iconClass="absolute top-[6px] right-[18px] fill-[#ffe500]"
                    spanClass="absolute top-[6px] right-2 text-white text-sm"
                />
            </div>
            <div className="flex justify-center items-center py-2">
                <DeviceImg
                    name={device.name}
                    img={device.img}
                    className="object-contain w-[200px] h-[200px] mt-6 mb-2"
                />
            </div>
            <div className="flex flex-col w-full px-4 pb-2 text-white text-left gap-1">
                <h3 className="text-base font-semibold truncate">
                    {device.name}
                </h3>
                <p className="text-lg font-bold text-[#8A4FFF]">
                    {device.price} ₽.
                </p>
            </div>
            <div className="w-full px-4 pb-4">
                <Button
                    className="rounded-md w-full h-[40px] text-center border border-[#3A177F] text-white hover:border-[#8A4FFF] hover:bg-[#1A1238]/50 transition-all"
                    onClick={() => addToBasket()}
                    text="Добавить в корзину"
                />
            </div>
        </div>
    );
};
