import { Input } from "../Input/ui/Input";
import { addressFieldsConfig } from "@/shared/config/addressFieldsConfig";
import { useFormContext, Controller } from "react-hook-form";

export const ShippingFields = () => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <div className="grid grid-cols-2 gap-[20px] flex-wrap">
            {addressFieldsConfig.map(({ name, placeholder }) => (
                <Controller
                    key={name}
                    name={name}
                    control={control}
                    render={({ field }) =>
                        <Input
                            {...field}
                            className="custom-input p-3 w-full"
                            placeholder={placeholder}
                            name={name}
                            error={errors[name]?.message as string}
                        />}
                />
            ))}
        </div>
    );
};