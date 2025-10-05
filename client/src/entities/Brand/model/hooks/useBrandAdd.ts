import { useActions, useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createBrand } from "../../api/brandApi";
import { BrandFormProps } from "../types/BrandFormProps";
import { BrandAddYupSchema } from "../libs/BrandAddYupSchema";

export const useBrandAdd = () => {

    const { fetchAllBrands } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<BrandFormProps>({
        resolver: yupResolver(BrandAddYupSchema)
    });

    const { register, handleSubmit, formState: { errors } } = form;

    const handleAddBrand = async (brand: string) => {
        try {
            await createBrand(brand);
            fetchAllBrands();
            notifySuccess("Бренд был добавлен.")
        } catch (err) {
            notifyError("Ошибка при добавлении.")
            console.log(err);
        }
    }

    return {
        form,
        handleAddBrand,
        handleSubmit,
    }
}