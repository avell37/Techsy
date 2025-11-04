import { addressFieldsConfig } from "@/shared/config/addressFieldsConfig";
import { FormInputController } from "@/shared/ui";
import { useFormContext } from "react-hook-form";

export const ShippingFields = () => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <div className="grid grid-cols-2 gap-[10px] flex-wrap max-sm:grid-cols-1">
            {addressFieldsConfig.map(({ name, placeholder }) => (
                <FormInputController
                    key={name}
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    className="p-3 w-full h-[50px] text-white border-primary-900/30 
                        hover:border-primary-900 transition-all max-w-[500px] max-sm:text-sm max-sm:p-2"
                    control={control}
                    errors={errors}
                />
            ))}
        </div>
    );
};