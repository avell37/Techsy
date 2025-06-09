import { StarIcon } from "@/shared/assets";
import { Button } from "@/shared/ui";
import { DevicePageDescriptionSchema } from "../../model/types/DevicePageSchema";

export const DevicePageInfo = ({ device }: DevicePageDescriptionSchema) => {
    return (
        <div className="flex border-1 rounded-xl border-[#5120B8]/30 mt-5 filters-bg-gradient shadow-lg">
            <div className="flex flex-col gap-[30px] p-8 w-[400px]">
                <p className="text-white font-bold text-3xl">{device?.name}</p>
                <div className="flex items-center gap-[3px]">
                    <StarIcon
                        width="30px"
                        height="30px"
                        className="fill-[#ffe500]"
                    />
                    <span className="text-white font-bold text-2xl">
                        {device?.rating}
                    </span>
                </div>
                <p className="text-white text-xl">
                    <span className="font-bold">Цена:</span> {device?.price} Р.
                </p>
                <p className="text-white text-xl">
                    <span className="font-bold">Тип:</span>{" "}
                    {device && device?.Type.name}
                </p>
                <p className="text-white text-xl">
                    <span className="font-bold">Бренд:</span>{" "}
                    {device && device?.Brand.name}
                </p>
                <Button
                    className="rounded-md w-[175px] h-[40px] text-center border border-[#3A177F] text-white hover:border-[#8A4FFF] hover:bg-[#1A1238]/50 transition-all cursor-pointer"
                    text="Добавить в корзину"
                />
            </div>
        </div>
    );
};
