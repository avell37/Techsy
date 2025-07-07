import { useState } from "react";
import { registration } from "@/entities/User";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { RegistrationView } from "./RegistrationView";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNotification, useActions } from "@/shared/hooks";
import { RegistrationYupSchema } from "../lib/RegistrationYupSchema";
import { RegistrationFormProps } from "../model/RegistrationFormProps";
import { handleServerFormError } from "@/shared/lib";

export const Registration = () => {
    const { fetchUser } = useActions();
    const [showPassword, setShowPassword] = useState(false);
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

    return (
        <RegistrationView
            showPassword={showPassword}
            control={control}
            errors={errors}
            toggleShowPassword={toggleShowPassword}
            handleSubmit={handleSubmit}
            handleRegistration={handleRegistration}
        />
    );
};
