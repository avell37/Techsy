import { DevicePageDescriptionSchema } from "../../model/types/DevicePageSchema";
import { categories } from "./consts/categories";
import { IDeviceInfo } from "@/shared/types";

export const DevicePageDescription = ({
    device,
}: DevicePageDescriptionSchema) => {
    if (!device) return null;

    if (!device.deviceInfo || device.deviceInfo.length === 0) {
        return (
            <div className="text-white/70 text-center py-8">
                Характеристики устройства отсутствуют
            </div>
        );
    }

    const deviceCategories = categories({ device });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deviceCategories.map((category) => {
                const [title, items] = Object.entries(category)[0];
                if (items.length === 0) return null;

                return (
                    <div
                        key={title}
                        className="bg-gradient-to-br from-[#1A1238]/30 to-[#08080e] p-6 rounded-2xl border-1 border-[#5120B8]/20 backdrop-blur-sm"
                    >
                        <h3 className="text-lg font-semibold text-[#8A4FFF] mb-4">
                            {title}
                        </h3>
                        <div className="space-y-4">
                            {items.map((info: IDeviceInfo) => (
                                <div
                                    key={info.id}
                                    className="group relative overflow-hidden transition-all duration-300 hover:bg-[#1A1238]/20 rounded-xl p-4"
                                >
                                    <div className="relative z-10">
                                        <div className="text-[#8A4FFF]/70 text-sm mb-1">
                                            {info.title}
                                        </div>
                                        <div className="text-white font-medium">
                                            {info.description}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#5120B8]/0 via-[#5120B8]/5 to-[#5120B8]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
