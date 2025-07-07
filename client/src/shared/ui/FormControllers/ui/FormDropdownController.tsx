import { Controller, FieldValues } from "react-hook-form";
import { get } from "lodash";
import { Button, Dropdown } from "@/shared/ui";
import { FormDropdownControllerProps } from "../model/types/FormDropdownControllerProps";

export const FormDropdownController = <T extends FieldValues>({
    name,
    control,
    items,
    errors,
    label,
    placeholder = "Выбрать...",
    className = "",
}: FormDropdownControllerProps<T>) => {
    const rawError = get(errors, `${name}.message`);
    const errorMessage = typeof rawError === "string" ? rawError : undefined;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const selectedItem = items.find((item) => item.id === field.value);
                return (
                    <div className={`flex flex-col gap-[10px] ${className}`}>
                        {label && (
                            <label className="text-gray-400 text-sm block">{label}</label>
                        )}
                        <Dropdown
                            trigger={
                                <Button
                                    type="button"
                                    className="p-2 rounded-md max-w-[175px] w-full h-[40px] border-1 border-primary-900/30 
                                    hover:border-primary-900 hover:bg-primary-300/30 focus:border-light-purple
                                    transition font-bold cursor-pointer text-white"
                                    text={selectedItem ? selectedItem.name : placeholder}
                                />
                            }
                            items={items.map((item) => ({
                                text: item.name,
                                onClick: () => field.onChange(item.id),
                            }))}
                            triggerClassname="max-w-[175px]"
                            className="flex justify-center"
                        />
                        {errorMessage && (
                            <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
                        )}
                    </div>
                );
            }}
        />
    );
};
