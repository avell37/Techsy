import { addressFieldsConfig } from "@/shared/config/addressFieldsConfig";
import { useFormContext } from "react-hook-form";
import { FormInputController } from "../FormControllers/ui/FormInputController";

export const ShippingFields = () => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <div className="grid grid-cols-2 gap-[20px] flex-wrap max-sm:grid-cols-1">
            {addressFieldsConfig.map(({ name, placeholder }) => (
                <FormInputController
                    key={name}
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    className="p-3 w-full h-[50px] max-w-[500px] max-sm:text-sm max-sm:p-2"
                    control={control}
                    errors={errors}
                />
            ))}
        </div>
    );
};