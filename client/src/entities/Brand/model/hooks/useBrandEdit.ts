import { useActions, useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BrandFormProps } from "../types/BrandFormProps";
import { BrandEditYupSchema } from "../libs/BrandEditYupSchema";
import { updateBrand } from "../../api/brandApi";

export const useBrandEdit = () => {

    const { fetchAllBrands } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<BrandFormProps>({
        resolver: yupResolver(BrandEditYupSchema)
    });

    const { handleSubmit } = form;

    const handleUpdateBrand = async (id: string, brand: string) => {
        try {
            await updateBrand(id, brand);
            fetchAllBrands();
            notifySuccess("Бренд был обновлен.")
        } catch (err) {
            notifyError("Ошибка при обновлении.")
            console.log(err);
        }
    }

    return {
        form,
        handleUpdateBrand,
        handleSubmit,
    }
}