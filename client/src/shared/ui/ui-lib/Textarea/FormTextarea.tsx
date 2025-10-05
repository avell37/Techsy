import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../Form/Form"
import { Textarea } from "./Textarea"

interface FormTextareaProps<T extends Record<string, any>> {
    name: Path<T>;
    control: Control<T>,
    label?: string;
    className?: string;
}

export const FormTextarea = <T extends FieldValues>({
    name,
    control,
    label,
    className
}: FormTextareaProps<T>) => {
    return (
        <FormField 
            name={name}
            control={control}
            render={({ field, fieldState }) => {

                return (
                    <FormItem className={`flex flex-col gap-[10px] ${className}`}>
                        {label && <FormLabel className="text-gray-400 text-sm block">{label}</FormLabel>}

                        <FormControl>
                            <Textarea
                                {...field}
                                className={`border-1 text-start rounded-lg text-white outline-none transition-all resize-none
                                ${fieldState.error 
                                    ? "border-red-600 hover:border-red-800"
                                    : "border-primary-900/30 hover:border-primary-900"}`}
                                placeholder="Опишите устройство"
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )
            }}
        />
    )
}
