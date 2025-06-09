import { DevicePageDescriptionSchema } from "../../model/types/DevicePageSchema";

export const DevicePageDescription = ({
    device,
}: DevicePageDescriptionSchema) => {
    return (
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
                            <p className="text-white text-semibold ml-[15px]">
                                {info.title}:
                            </p>
                            <p className="text-white text-semibold ml-[15px]">
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
    );
};
