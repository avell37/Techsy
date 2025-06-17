import { saveShippingInfo } from "@/entities";
import { useAppSelector, useNotification } from "@/shared/hooks";
import { IShipping } from "@/shared/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ShippingYupSchema } from "../lib/ShippingYupSchema";
import { AxiosError } from "axios";

export const useShippingForm = () => {
    const { shipping } = useAppSelector((state) => state.shippingReducer);
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

    const { reset, setError } = methods;

    useEffect(() => {
        if (shipping) {
            reset(shipping);
        }
    }, [shipping]);

    const handleShippingFormSubmit = async (data: IShipping) => {
        try {
            await saveShippingInfo(data);
            notifySuccess("Данные успешно сохранены");
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            const message = error.response?.data?.message || "Ошибка. Пожалуйста, попробуйте еще раз.";
            if (message.includes("Отсутствуют обязательные поля")) {
                const missing = message.split(":")[1]?.split(',').map((field) => field.trim());
                if (missing?.length) {
                    missing.forEach((field) => {
                        setError(field as keyof IShipping, {
                            type: "server",
                            message
                        })
                    })
                }
            }
            else {
                notifyError("Ошибка... Попробуй еще раз :)");
            }
        }
    };

    return {
        methods,
        handleShippingFormSubmit,
    }
}