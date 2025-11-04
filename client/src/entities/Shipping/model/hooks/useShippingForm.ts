import { IShipping, saveShippingInfo, shippingSelector } from "@/entities/Shipping";
import { useAppSelector, useNotification, useActions } from "@/shared/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { ShippingYupSchema } from "../validation/ShippingYupSchema";
import { renderMissingErrors } from "../utils/renderMissingErrors";

export const useShippingForm = () => {
    const shipping = useAppSelector(shippingSelector.shipping);
    const { fetchShippingInfo } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<IShipping>({
        resolver: yupResolver(ShippingYupSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            country: "",
            region: "",
            zipCode: "",
            city: "",
            address: "",
        }
    });

    const { reset, setError, handleSubmit } = form;

    useEffect(() => {
        if (shipping) {
            reset(shipping);
        }
    }, [shipping]);

    const handleShippingFormSubmit = async (data: IShipping) => {
        try {
            await saveShippingInfo(data);
            fetchShippingInfo();
            notifySuccess("Данные успешно сохранены");
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            const message = error.response?.data?.message || "Ошибка. Пожалуйста, попробуйте еще раз.";
            if (message.includes("Отсутствуют обязательные поля")) {
                renderMissingErrors<IShipping>(message, setError);
            }
            else {
                notifyError("Ошибка... Попробуй еще раз :)");
            }
        }
    };

    return {
        form,
        handleShippingFormSubmit: handleSubmit(handleShippingFormSubmit),
    }
}
