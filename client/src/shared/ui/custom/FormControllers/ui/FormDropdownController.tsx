import { FieldValues } from "react-hook-form";
import { Button, Dropdown, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui";
import type { FormDropdownControllerProps } from "../model/types/FormDropdownControllerProps";

export const FormDropdownController = <T extends FieldValues>({
    name,
    control,
    items,
    label,
    placeholder = "Выбрать...",
    className = "",
}: FormDropdownControllerProps<T>) => {
    return (
        <FormField 
            name={name}
            control={control}
            render={({ field, fieldState }) => {
                const selectedItem = items.find((item) => item.id === field.value);
                const hasError = !!fieldState.error;

                return (
                    <FormItem className={`flex flex-col gap-[10px] ${className}`}>
                        {label && <FormLabel className="text-gray-400 text-sm block">{label}</FormLabel>}

                        <FormControl>
                            <Dropdown
                                trigger={
                                    <Button
                                        type="button"
                                        className={`p-2 rounded-md w-full border-1 transition font-bold cursor-pointer text-white
                                        ${hasError
                                            ? "border-red-600 hover:border-red-800"
                                            : "border-1 border-primary-900/30 hover:border-primary-900 hover:bg-primary-300/30 focus:border-light-purple"
                                        }`}
                                    >
                                        {selectedItem ? selectedItem.name : placeholder}
                                    </Button>
                                }
                                items={items.map((item) => ({
                                    text: item.name,
                                    onClick: () => field.onChange(item.id),
                                }))}
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )
            }}
        />
    );
};