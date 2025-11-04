import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNotification, useActions } from "@/shared/hooks";
import { handleServerFormError } from "@/shared/lib";
import { registration, RegistrationFields } from "@/features/Auth";
import type { RegistrationFormProps } from "../types/RegistrationFormProps";
import { RegistrationYupSchema } from "../validation/RegistrationYupSchema";

export const useRegistration = () => {
    const { getUser } = useActions();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<RegistrationFormProps>({
        resolver: yupResolver(RegistrationYupSchema)
    });

    const onSubmit = async (data: RegistrationFormProps) => {
        try {
            await registration(data.username, data.email, data.password);
            getUser();
            form.reset();
            navigate(SHOP_ROUTE);
            notifySuccess("Успешная регистрация!");
        } catch (err) {
            handleServerFormError<{ email: string }>(
                err,
                form.setError,
                {
                    email: "email"
                },
                notifyError
            )
        }
    }

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    const fields = RegistrationFields({showPassword, toggleShowPassword})

    return {
        form,
        fields,
        onSubmit,
    }
}