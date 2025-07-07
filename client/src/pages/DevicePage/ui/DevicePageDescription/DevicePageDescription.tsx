import { DevicePageDescriptionSchema } from "../../model/types/DevicePageSchema";
import { categories } from "./consts/categories";
import { DevicePageDescriptionItem } from "./DevicePageDescriptionItem";

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
                    <DevicePageDescriptionItem
                        key={title}
                        title={title}
                        items={items}
                    />
                );
            })}
        </div>
    );
};
