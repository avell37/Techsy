import { StarIcon } from "@/shared/assets";
import { Button } from "@/shared/ui";
import { DevicePageDescriptionSchema } from "../../model/types/DevicePageSchema";

export const DevicePageDescription = ({
    device,
}: DevicePageDescriptionSchema) => {
    return (
        <>
            <div className="flex flex-col gap-[30px]">
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
                    className="w-[200px] h-[40px] bg-[#5120B8] text-white rounded-xl font-bold"
                    text="Добавить в корзину"
                />
            </div>
            <div className="border-1 border-[#5120B8]/30 rounded-xl max-w-[500px] max-h-[490px] w-full h-full">
                <p className="text-white text-center font-bold mt-[5px]">
                    Характеристики:
                </p>
                <div className="flex flex-col gap-[10px] mb-[20px]">
                    {device?.deviceInfo && device?.deviceInfo?.length > 0 ? (
                        device?.deviceInfo?.map((info) => (
                            <div
                                key={info.id}
                                className="flex border-b border-[#5120B8]/20 pb-2"
                            >
                                <p className="text-white text-semibold ml-[7px]">
                                    {info.title}:
                                </p>
                                <p className="text-white text-semibold ml-[7px]">
                                    {info.description}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="text-white text-center mt-6 mb-6 font-bold">
                            Упс... Мы не нашли описание товара.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
