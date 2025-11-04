import { useActions, useAppSelector, useNotification } from "@/shared/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { BrandFormProps } from "../types/BrandFormProps";
import { BrandYupSchema } from "../validation/BrandYupSchema";
import { updateBrand } from "@/entities/Brand";
import { useEffect } from "react";
import { selectBrandById } from "@/entities/Brand";
import { useParams } from "react-router-dom";

export const useBrandEdit = () => {
    const { id } = useParams<{ id: string }>();
    const { fetchAllBrands } = useActions();
    const { notifySuccess, notifyError } = useNotification();
    const brand = useAppSelector(selectBrandById(id));

    const form = useForm<BrandFormProps>({
        resolver: yupResolver(BrandYupSchema),
    });

    useEffect(() => {
        if (brand) form.reset({ name: brand.name });
    }, [brand]);

    const handleUpdateBrand = async (id: string, brand: string) => {
        try {
            await updateBrand(id, brand);
            await fetchAllBrands();
            notifySuccess("Бренд был обновлен.");
        } catch (err) {
            notifyError("Ошибка при обновлении.");
            console.error(err);
        }
    };

    const onSubmit: SubmitHandler<BrandFormProps> = (data) => {
        if (brand) handleUpdateBrand(brand.id, data.name);
    };

    return {
        brand,
        form,
        handleSubmit: form.handleSubmit,
        onSubmit,
    };
};
