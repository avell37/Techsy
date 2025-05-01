import { Button } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/shared/config/consts";
import { StarIcon, LikeIcon } from "@shared/assets";

export const Card = ({ device }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={(e) => {
                if (e.target.closest("button")) return;
                navigate(DEVICE_ROUTE + "/" + device.id);
            }}
            className="relative flex flex-col justify-between items-center max-w-[275px] 
            min-h-[300px] w-full border-1 border-[#3A177F] rounded-xl hover:border-[#8A4FFF] 
            hover:bg-[#1A1238]/30 transition-all"
        >
            <div className="relative flex w-full">
                <Button>
                    <LikeIcon
                        width="25px"
                        height="25px"
                        className="absolute top-[5px] left-1 hover:border-[#8A4FFF]"
                    />
                </Button>
                <StarIcon
                    width="20px"
                    height="20px"
                    className="absolute top-[6px] right-[18px]"
                />
                <span className="absolute top-[6px] right-2 text-white text-sm">
                    {device.rating}
                </span>
            </div>
            <div className="flex justify-center items-center py-2">
                <img
                    className="object-contain w-[200px] h-[200px] mt-6 mb-2"
                    src={import.meta.env.VITE_API_URL + "/" + device.img}
                    alt={device.name}
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
                    text="Добавить в корзину"
                />
            </div>
        </div>
    );
};
