import { Button } from "@/shared/ui";
import { FormProvider } from "react-hook-form";
import { ShippingFields } from "./ShippingFields";
import { useShippingForm } from "../model/hooks/useShippingForm";

export const ShippingForm = () => {
    const { methods, handleShippingFormSubmit } = useShippingForm();

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleShippingFormSubmit} className="flex flex-col gap-[20px]">
                <ShippingFields />
                <div className="flex justify-end gap-[10px]">
                    <Button
                        variant="ghost"
                        className="flex justify-center items-center apply-button bg-primary-900 hover:bg-primary-900/30"
                    >
                        Сохранить
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};