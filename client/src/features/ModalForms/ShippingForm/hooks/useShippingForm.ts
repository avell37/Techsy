import { saveShippingInfo, shippingSelector } from "@/entities";
import { useAppSelector, useNotification, useActions } from "@/shared/hooks";
import { IShipping } from "@/shared/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ShippingYupSchema } from "../lib/ShippingYupSchema";
import { AxiosError } from "axios";
import { renderMissingErrors } from "../utils/renderMissingErrors";

export const useShippingForm = () => {
    const shipping = useAppSelector(shippingSelector.shipping);
    const { fetchShippingInfo } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const methods = useForm<IShipping>({
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

    const { reset, setError, handleSubmit } = methods;

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
        methods,
        handleShippingFormSubmit: handleSubmit(handleShippingFormSubmit),
    }
}