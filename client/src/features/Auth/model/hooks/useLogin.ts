import { useActions, useNotification } from "@/shared/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { handleServerFormError } from "@/shared/lib";
import { login, LoginFields } from "@/features/Auth";
import type { LoginFormProps } from "../types/LoginFormProps";
import { LoginYupSchema } from "../validation/LoginYupSchema";

export const useLogin = () => {
    const { getUser } = useActions();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<LoginFormProps>({
        resolver: yupResolver(LoginYupSchema),
    });

    const onSubmit = async (data: LoginFormProps) => {
        try {
            await login(data.email, data.password);
            await getUser();
            form.reset();
            navigate(SHOP_ROUTE);
            notifySuccess("Успешный вход!");
        } catch (err) {
            handleServerFormError<{ email: string, password: string }>(
                err,
                form.setError,
                {
                    email: "email",
                    password: "password"
                },
                notifyError
            )
        }
    };

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    const fields = LoginFields({showPassword, toggleShowPassword})

    return {
        form,
        fields,
        onSubmit
    }
}