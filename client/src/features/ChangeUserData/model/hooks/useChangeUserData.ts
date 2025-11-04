import { useActions, useAppSelector, useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    changeEmail,
    changePassword,
    changeUsername,
    userSelector,
} from "@/entities/User";
import {
    emailSchema,
    passwordSchema,
    usernameSchema,
} from "../validation/ChangeUserSchema";

export interface PasswordFormData {
    oldPassword: string;
    newPassword: string;
    repeatPassword: string;
}

export const useChangeUserData = () => {
    const { getUser } = useActions();
    const user = useAppSelector(userSelector.currentUser);
    const { notifySuccess, notifyError } = useNotification();

    const usernameForm = useForm<{ username: string }>({
        resolver: yupResolver(usernameSchema),
        defaultValues: {
            username: user?.username || "",
        },
    });

    const emailForm = useForm<{ email: string }>({
        resolver: yupResolver(emailSchema),
        defaultValues: {
            email: user?.email || "",
        },
    });

    const passwordForm = useForm<PasswordFormData>({
        resolver: yupResolver(passwordSchema),
    });

    const onChangeUsername = async (data: string) => {
        try {
            await changeUsername(data);
            await getUser();
            notifySuccess("Имя обновлено.");
        } catch (err) {
            notifyError("Ошибка при обновлении.");
            console.error(err);
        }
    };

    const onChangeEmail = async (data: string) => {
        try {
            await changeEmail(data);
            await getUser();
            notifySuccess("Почта обновлена.");
        } catch (err) {
            notifyError("Ошибка при обновлении.");
            console.error(err);
        }
    };

    const onChangePassword = async (data: PasswordFormData) => {
        try {
            await changePassword(data.oldPassword, data.newPassword);
            await getUser();
            notifySuccess("Пароль обновлен.");
        } catch (err) {
            notifyError("Ошибка при обновлении.");
            console.error(err);
        }
    };

    return {
        user,
        usernameForm,
        emailForm,
        passwordForm,
        onChangeUsername,
        onChangeEmail,
        onChangePassword,
    };
};
