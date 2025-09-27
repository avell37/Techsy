import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNotification, useActions } from "@/shared/hooks";
import { RegistrationYupSchema } from "../lib/RegistrationYupSchema";
import { RegistrationFormProps } from "../model/RegistrationFormProps";
import { handleServerFormError } from "@/shared/lib";
import { registration } from "@/entities/Auth";

export const useRegistration = () => {
    const { fetchUser } = useActions();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<RegistrationFormProps>({
        resolver: yupResolver(RegistrationYupSchema)
    });

    const { reset, setError } = form;

    const onSubmit = async (data: RegistrationFormProps) => {
        try {
            await registration(data.username, data.email, data.password);
            fetchUser();
            reset();
            navigate(SHOP_ROUTE);
            notifySuccess("Успешная регистрация!");
        } catch (err) {
            handleServerFormError<{ email: string }>(
                err,
                setError,
                {
                    email: "email"
                },
                notifyError
            )
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return {
        form,
        showPassword,
        toggleShowPassword,
        onSubmit,
    }
}