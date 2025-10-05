import { useNotification } from "@/shared/hooks";
import { emailSchema, passwordSchema, usernameSchema } from "../libs/ChangeUserSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changeEmail, changePassword, changeUsername } from "../../api/userApi";
import { fetchUser } from "../services/fetchUser";
import { IUser } from "@/shared/types";

interface PasswordFormData {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export const useChangeUserData = (currentUser: IUser | null) => {
    const { notifySuccess, notifyError } = useNotification();

    const usernameForm = useForm<{username: string}>({
        resolver: yupResolver(usernameSchema),
        defaultValues: {
            username: currentUser?.username || '',
        }
    })

    const emailForm = useForm<{email: string}>({
        resolver: yupResolver(emailSchema),
        defaultValues: {
            email: currentUser?.email || '',
        }
    })

    const passwordForm = useForm<PasswordFormData>({
        resolver: yupResolver(passwordSchema)
    })

    const onChangeUsername = async (data: string) => {
        try {
            await changeUsername(data);
            fetchUser();
            notifySuccess("Имя обновлено.")
        } catch (err) {
            notifyError("Ошибка при обновлении.")
            console.log(err);
        }
    }

    const onChangeEmail = async (data: string) => {
        try {
            await changeEmail(data);
            fetchUser();
            notifySuccess("Почта обновлена.")
        } catch (err) {
            notifyError("Ошибка при обновлении.")
            console.log(err);
        }
    }

    const onChangePassword = async (data: PasswordFormData) => {
        try {
            await changePassword(data.oldPassword, data.newPassword);
            fetchUser();
            notifySuccess("Пароль обновлен.")
        } catch (err) {
            notifyError("Ошибка при обновлении.")
            console.log(err);
        }
    }

    return {
        usernameForm,
        emailForm,
        passwordForm,
        onChangeUsername,
        onChangeEmail,
        onChangePassword
    }
}
