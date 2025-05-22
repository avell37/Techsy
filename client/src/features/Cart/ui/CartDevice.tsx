import { PlusIcon, XMarkIcon, MinusIcon } from "@/shared/assets";
import { Button, DeviceImg, DeviceRating } from "@/shared/ui";

export const CartDevice = () => {
    return (
        <div
            className="relative flex items-center justify-between
            min-h-[130px] w-full border-[2px] border-[#3A177F] rounded-xl hover:border-[#8A4FFF] 
            hover:bg-[#1A1238]/30 transition-all"
        >
            <div className="flex">
                <DeviceImg
                    className="object-cover w-[120px] h-[120px] p-4"
                    img="14bd5a25-889a-4a8d-8ec2-241d81ec355c.png"
                    name="device"
                />
                <div className="flex flex-col justify-center min-w-[300px]">
                    <DeviceRating spanClass="text-white" rating="0" />
                    <p className="text-white">Samsung A55</p>
                    <p className="text-[#8A4FFF]">129,999 Р.</p>
                </div>
            </div>
            <div className="flex justify-around items-center h-full w-full">
                <div className="flex items-center border border-[#8A4FFF] rounded-md gap-[10px]">
                    <MinusIcon
                        width="20px"
                        height="15px"
                        className="stroke-[#fff]"
                    />
                    <span className="text-white">1</span>
                    <PlusIcon
                        width="15px"
                        height="15px"
                        className="stroke-[#fff]"
                    />
                </div>
            </div>
            <Button className="absolute top-2 right-2">
                <XMarkIcon
                    width="20px"
                    height="20px"
                    className="stroke-[#fff]"
                />
            </Button>
        </div>
    );
};
