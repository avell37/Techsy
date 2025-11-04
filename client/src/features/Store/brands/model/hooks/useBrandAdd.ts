import { useActions, useNotification } from "@/shared/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { BrandFormProps } from "../types/BrandFormProps";
import { BrandYupSchema } from "../validation/BrandYupSchema";
import { createBrand } from "@/entities/Brand";

export const useBrandAdd = () => {
    const { fetchAllBrands } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<BrandFormProps>({
        resolver: yupResolver(BrandYupSchema),
    });

    const handleAddBrand = async (brand: string) => {
        try {
            await createBrand(brand);
            await fetchAllBrands();
            notifySuccess("Бренд был добавлен.");
        } catch (err) {
            notifyError("Ошибка при добавлении.");
            console.error(err);
        }
    };

    const onSubmit: SubmitHandler<BrandFormProps> = (data) => {
        handleAddBrand(data.name);
    };

    return {
        form,
        handleAddBrand,
        handleSubmit: form.handleSubmit,
        onSubmit,
    };
};
