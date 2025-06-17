import { StarIcon } from "@/shared/assets";
import { Button } from "@/shared/ui";
import { DeviceLike } from "@/entities";
import { DevicePageInfoSchema } from "../../model/types/DevicePageSchema";
import { addToBasket } from "@/shared/lib";
import { useNotification } from "@/shared/hooks";

export const DevicePageInfo = ({
    device,
    isFavorite,
    toggleFavorites,
}: DevicePageInfoSchema) => {
    const { notifySuccess, notifyError, notifyWarn } = useNotification();

    return (
        <div className="flex border-1 rounded-2xl border-[#5120B8]/30 max-w-[600px] w-full bg-gradient-to-br from-[#1A1238]/50 to-[#08080e] backdrop-blur-sm p-8">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex justify-between items-start">
                    <div className="space-y-2">
                        <h1 className="text-white font-bold text-3xl tracking-tight">
                            {device?.name}
                        </h1>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-[#3A177F]/30 text-[#8A4FFF] text-sm">
                                {device && device?.Type.name}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-[#3A177F]/30 text-[#8A4FFF] text-sm">
                                {device && device?.Brand.name}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 bg-[#3A177F]/20 px-3 py-1 rounded-xl">
                        <StarIcon
                            width="24px"
                            height="24px"
                            className="fill-[#ffe500]"
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
                        <span className="text-[#8A4FFF]/70 text-sm mb-1">
                            Цена с НДС
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            className="flex-1 h-12 bg-[#5120B8] hover:bg-[#8A4FFF] text-white font-medium rounded-xl transition-all duration-300"
                            text="Добавить в корзину"
                            onClick={() =>
                                addToBasket({
                                    id: device?.id || "",
                                    notifySuccess,
                                    notifyWarn,
                                    notifyError,
                                })
                            }
                        />
                        <div className="h-12 w-12 flex items-center justify-center border-1 border-[#3A177F] rounded-xl hover:border-[#8A4FFF] hover:bg-[#1A1238]/50 transition-all duration-300 cursor-pointer">
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
