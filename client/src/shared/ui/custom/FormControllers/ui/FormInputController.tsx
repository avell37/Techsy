import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/ui"
import { FormInputControllerProps } from "../model/types/FormInputControllerProps"

export const FormInputController = ({
    name,
    control,
    placeholder = "",
    type = "text",
    icon,
    element,
    label,
    className = "",
}: FormInputControllerProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <div className="relative">
                        <FormLabel
                            className="text-sm text-gray-300 mb-[10px] pointer-events-none"
                        >
                            {label}
                        </FormLabel>
                        {icon && (
                            <span className="absolute left-3 top-5">
                                {icon}
                            </span>
                        )}

                        <FormControl>
                            <Input 
                                {...field}
                                type={type}
                                placeholder={placeholder}
                                className={className}
                                value={field.value ?? ""}
                            />
                        </FormControl>

                        {element && (
                            <span className="absolute right-1 top-5">
                                {element}
                            </span>
                        )}
                    </div>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}