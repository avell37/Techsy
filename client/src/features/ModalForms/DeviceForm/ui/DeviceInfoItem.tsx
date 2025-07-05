import { Input, Button } from "@/shared/ui";
import { XMarkIcon } from "@/shared/assets";
import React from "react";
import { DeviceInfoItemSchema } from "../types/DeviceInfoSchema";

export const DeviceInfoItem = React.memo(
    ({ item, onChange, onRemove }: DeviceInfoItemSchema) => {
        return (
            <div className="flex items-center gap-[10px]">
                <Input
                    value={item.title}
                    className="max-w-[175px] w-full custom-input text-sm p-3"
                    placeholder="Название свойства"
                    onChange={(e) => onChange(item.id, "title", e.target.value)}
                />
                <Input
                    value={item.description}
                    className="max-w-[175px] w-full custom-input text-sm p-3"
                    placeholder="Описание свойства"
                    onChange={(e) =>
                        onChange(item.id, "description", e.target.value)
                    }
                />
                <Button type="button" onClick={() => onRemove(item.id)}>
                    <XMarkIcon
                        className="stroke-red-500 cursor-pointer 
                        hover:stroke-red-300 transition-all duration-300 max-w-[25px] w-full max-h-[25px] h-full max-sm:max-w-[20px] max-sm:max-h-[20px]"
                    />
                </Button>
            </div>
        );
    }
);