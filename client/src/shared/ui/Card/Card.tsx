import star from "@shared/assets/star.png";
import { Button } from "@/shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/shared/config/consts";

export const Card = ({ device }) => {
    const navigate = useNavigate();
    console.log(device);

    console.log(import.meta.env.VITE_API_URL + "/uploads/" + device.img);

    return (
        <div
            onClick={(e) => {
                if (e.target.closest("button")) return;
                navigate(DEVICE_ROUTE + "/" + device.id);
            }}
            className="relative flex flex-col justify-between items-center max-w-[250px] 
            min-h-[300px] w-full border-1 border-[#3A177F] rounded-xl hover:border-[#8A4FFF] 
            hover:bg-[#1A1238]/30 transition-all"
        >
            <div className="relative flex w-full">
                <img
                    className="absolute top-2 right-5 w-[15px] h-[15px]"
                    src={star}
                    alt="rating star"
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
