import { ShippingFields, Button } from "@/shared/ui";
import { useShippingForm } from "../hooks/useShippingForm";
import { FormProvider } from "react-hook-form";

export const ShippingForm = () => {
    const { methods, handleShippingFormSubmit } = useShippingForm();
    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleShippingFormSubmit)} className="flex flex-col gap-[20px]">
                <ShippingFields />
                <div className="flex justify-end gap-[10px]">
                    <Button
                        className="apply-button"
                        type="submit"
                        text="Сохранить"
                    />
                </div>
            </form>
        </FormProvider>
    );
};
