import { useState } from "react";
import { login } from "@/entities/User/api/userApi";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { LoginView } from "./LoginView";
import { useNotification, useAppDispatch } from "@/shared/hooks";
import { fetchUser } from "@/entities/User";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from "axios";
import { LoginFormProps } from "../model/types/LoginFormProps";
import { LoginYupSchema } from "../lib/LoginYupSchema";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { notifySuccess, notifyError } = useNotification();

    const { control, handleSubmit, reset, setError,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(LoginYupSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const handleLogin = async (data: LoginFormProps) => {
        try {
            await login(data.email, data.password);
            await dispatch(fetchUser());
            reset();
            navigate(SHOP_ROUTE);
            notifySuccess("Успешный вход!");
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            const message = error.response?.data?.message || "Ошибка регистрации. Пожалуйста, попробуйте еще раз.";
            if (message.toLowerCase().includes("email")) {
                setError("email", {
                    type: "server",
                    message,
                })
            } else if (message.toLowerCase().includes("пароль")) {
                setError("password", {
                    type: "server",
                    message,
                })
            } else {
                notifyError(message);
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <LoginView
            handleLogin={handleLogin}
            handleSubmit={handleSubmit}
            toggleShowPassword={toggleShowPassword}
            showPassword={showPassword}
            control={control}
            errors={errors}
        />
    );
};
