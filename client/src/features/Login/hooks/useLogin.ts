import { useActions, useNotification } from "@/shared/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginYupSchema } from "../lib/LoginYupSchema";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { handleServerFormError } from "@/shared/lib";
import { LoginFormProps } from "../model/types/LoginFormProps";
import { login } from "@/entities/Auth";

export const useLogin = () => {
    const { fetchUser } = useActions();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<LoginFormProps>({
        resolver: yupResolver(LoginYupSchema),
    });

    const { reset, setError } = form;

    const onSubmit = async (data: LoginFormProps) => {
        try {
            await login(data.email, data.password);
            await fetchUser();
            reset();
            navigate(SHOP_ROUTE);
            notifySuccess("Успешный вход!");
        } catch (err) {
            handleServerFormError<{ email: string, password: string }>(
                err,
                setError,
                {
                    email: "email",
                    password: "password"
                },
                notifyError
            )
        }
    };

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    return {
        form,
        showPassword,
        toggleShowPassword,
        onSubmit
    }
}