import star from "../../../../public/icons/star.png";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/shared/config/consts";

export const Card = ({ device }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
            className="relative flex flex-col justify-between items-center max-w-[250px] min-h-[300px] w-full border-1 border-[#3A177F] rounded-xl hover:border-[#8A4FFF] hover:bg-[#1A1238]/30 transition-all"
        >
            <div className="relative flex w-full">
                <img
                    className="absolute text-white top-2 right-5 w-[15px] h-[15px]"
                    src={star}
                />
                <span className="absolute top-1 right-2 text-white">
                    {device.rating}
                </span>
            </div>
            <img
                className="max-w-[200px] max-h-[200px]"
                src={import.meta.env.VITE_API_URL + "/" + device.img}
            />
            <div className="relative flex flex-col w-full gap-[5px] pb-[8px]">
                <div className="text-white text-start ml-[5px]">
                    {device.name}
                </div>
                <div className="text-white ml-[5px]">{device.price} Р.</div>
                <Button
                    className="absolute bottom-1 right-1 rounded-full w-[50px] h-[50px] bg-gradient-to-r from-[#5120B8] to-[#3A177F] font-bold focus:outline-none cursor-pointer text-white"
                    text="+"
                />
            </div>
        </div>
    );
};
