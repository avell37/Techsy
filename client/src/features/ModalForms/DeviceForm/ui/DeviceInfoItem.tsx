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
                    className="max-w-[175px] custom-input text-sm p-3"
                    placeholder="Название свойства"
                    onChange={(e) => onChange(item.id, "title", e.target.value)}
                />
                <Input
                    value={item.description}
                    className="max-w-[175px] custom-input text-sm p-3"
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