import { useState } from "react";
import { registration } from "@/entities/User/api/userApi";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { RegistrationView } from "./RegistrationView";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNotification } from "@/shared/hooks";
import { AxiosError } from "axios";
import { RegistrationYupSchema } from "../lib/RegistrationYupSchema";
import { RegistrationFormProps } from "../model/RegistrationFormProps";

export const Registration = () => {
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const { notifySuccess, notifyError } = useNotification();

    const { control, handleSubmit, reset, setError,
        formState: { errors }
    } = useForm<RegistrationFormProps>({
        resolver: yupResolver(RegistrationYupSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }
    });

    const handleRegistration = async (data: RegistrationFormProps) => {
        try {
            await registration(data.username, data.email, data.password);
            reset();
            navigate(SHOP_ROUTE);
            notifySuccess("Успешная регистрация!");
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            const message = error.response?.data?.message || "Ошибка регистрации. Пожалуйста, попробуйте еще раз.";
            if (message.toLowerCase().includes("email")) {
                setError("email", {
                    type: "server",
                    message,
                })
            } else {
                notifyError(message);
            }
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <RegistrationView
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            handleSubmit={handleSubmit}
            handleRegistration={handleRegistration}
            control={control}
            errors={errors}
        />
    );
};
