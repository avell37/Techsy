import { addressFieldsConfig } from "@/shared/config/addressFieldsConfig";
import { useFormContext } from "react-hook-form";
import { FormInputController } from "../FormControllers/ui/FormInputController";

export const ShippingFields = () => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <div className="grid grid-cols-2 gap-[20px] flex-wrap">
            {addressFieldsConfig.map(({ name, placeholder }) => (
                <FormInputController
                    key={name}
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    className="p-3 w-full h-[50px] min-w-[400px]"
                    control={control}
                    errors={errors}
                />
            ))}
        </div>
    );
};