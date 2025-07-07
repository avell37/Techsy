import { useActions, useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { BrandYupSchema } from "../lib/BrandYupSchema";
import { createBrand } from "@/entities";
import { handleServerFormError } from "@/shared/lib";

export const useBrandForm = (onClose?: () => void) => {
    const { fetchAllBrands } = useActions();
    const { notifySuccess, notifyWarn, notifyError } = useNotification();

    const { control, handleSubmit, reset, setError,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(BrandYupSchema),
        defaultValues: {
            brand: ''
        }
    });

    const handleBrandFormSubmit = async (data: { brand: string }) => {
        try {
            if (data.brand.length <= 0) {
                return notifyWarn("Поле обязательно для заполнения");
            }
            await createBrand(data.brand);
            fetchAllBrands();
            reset();
            if (onClose) onClose();
            notifySuccess("Отлично! Бренд уже на сайте!");
        } catch (err) {
            handleServerFormError<{ brand: string }>(
                err,
                setError,
                {
                    brand: "brand"
                },
                notifyError
            )
        }
    };

    return {
        control,
        errors,
        handleBrandFormSubmit: handleSubmit(handleBrandFormSubmit)
    }
}