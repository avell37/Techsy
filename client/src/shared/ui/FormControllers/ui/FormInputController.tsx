import { FormInputControllerProps } from "../model/types/FormInputControllerProps"
import { FormControl, FormField, FormItem, FormMessage } from "../../ui-lib/Form/Form"
import { Input } from "../../ui-lib/Input/Input"

export const FormInputController = ({
    name,
    control,
    placeholder = "",
    type = "text",
    icon,
    element,
    className = "",
}: FormInputControllerProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <div className="relative">
                        {icon && (
                            <span className="absolute left-3 top-[10px]">
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
                            <span className="absolute right-1 top-2">
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
