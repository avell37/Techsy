import { Input, Button } from "@/shared/ui";
import { DeviceInfoItemSchema } from "@/features/ManageModal/model/types/DeviceInfoSchema";
import { XMarkIcon } from "@/shared/assets";
import React from "react";

export const DeviceInfoItem = React.memo(
    ({ item, onChange, onRemove }: DeviceInfoItemSchema) => {
        return (
            <div className="flex items-center gap-[10px]">
                <Input
                    value={item.title}
                    className="w-[175px] w-full h-[40px] bg-[#111729] rounded-md border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Название свойства"
                    onChange={(e) => onChange(item.id, "title", e.target.value)}
                />
                <Input
                    value={item.description}
                    className="w-[175px] w-full h-[40px] bg-[#111729] rounded-md border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Описание свойства"
                    onChange={(e) =>
                        onChange(item.id, "description", e.target.value)
                    }
                />
                <Button type="button" onClick={() => onRemove(item.id)}>
                    <XMarkIcon
                        width="20px"
                        height="20px"
                        className="stroke-red-500"
                    />
                </Button>
            </div>
        );
    }
);
