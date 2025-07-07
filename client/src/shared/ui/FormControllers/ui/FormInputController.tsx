import { Controller } from "react-hook-form"
import { Input } from "../../Input/ui/Input"
import { FormInputControllerProps } from "../model/types/FormInputControllerProps"
import { get } from "lodash";

export const FormInputController = ({
    name,
    control,
    placeholder = "",
    type = "text",
    icon,
    element,
    className = "",
    errors,
}: FormInputControllerProps) => {
    const errorMessage = get(errors, `${name}.message`);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    className={`${className} custom-input`}
                    error={typeof errorMessage === 'string' ? errorMessage : undefined}
                >
                    {icon && <span className="absolute top-3 left-3 max-sm:top-[9px] max-sm:left-[7px]">{icon}</span>}
                    {element && (
                        <span className="absolute right-2 top-3 max-sm:top-[9px] max-sm:right-[7px]">{element}</span>
                    )}
                </Input>
            )} />
    )
}
