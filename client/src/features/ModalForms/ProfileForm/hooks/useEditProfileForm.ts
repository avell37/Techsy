import { changeUsername, changeEmail, changePassword, fetchUser } from "@/entities";
import { useNotification, useAppDispatch } from "@/shared/hooks";
import { EditProfileFormProps } from "../types/EditProfileFormProps";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { ProfileYupSchema } from "@/features/ModalForms/ProfileForm/lib/ProfileYupSchema";
import { ProfileHookData } from "../types/ProfileHookData";
import { AxiosError } from "axios";

export const useEditProfileForm = ({ edit, onClose }: EditProfileFormProps) => {
    const dispatch = useAppDispatch();
    const { notifyError, notifySuccess, notifyWarn } = useNotification();

    const { control, handleSubmit, reset, setError,
        formState: { errors }
    } = useForm<ProfileHookData>({
        resolver: yupResolver(ProfileYupSchema(edit)),
        defaultValues: {
            username: "",
            email: "",
            oldPassword: "",
            newPassword: "",
            repeatPassword: ""
        }
    });

    let title = '';
    let placeholder = '';
    let isPassword = false;

    switch (edit) {
        case 'username':
            title = 'имя пользователя';
            placeholder = 'Введите новое имя';
            break;
        case 'email':
            title = 'электронную почту';
            placeholder = 'Введите новый email';
            break;
        case 'password':
            title = 'пароль';
            placeholder = 'Введите ваш старый пароль';
            isPassword = true;
            break;
    }

    const handleChangeData = async (data: ProfileHookData) => {
        try {
            if (edit === 'username' && data.username) {
                if (!data.username.trim()) return notifyWarn("Поле не может быть пустым.")
                await changeUsername(data.username);
                reset();
                dispatch(fetchUser())
                notifySuccess('Имя пользователя успешно изменено!')
            } else if (edit === 'email' && data.email) {
                if (!data.email.trim()) return notifyWarn("Поле не может быть пустым.")
                await changeEmail(data.email);
                reset();
                dispatch(fetchUser())
                notifySuccess('Почта успешно изменена!')
            } else if (edit === 'password' && data.oldPassword) {
                if (!data.oldPassword || !data.newPassword || !data.repeatPassword) {
                    return notifyWarn('Заполните все поля.')
                }
                if (data.newPassword !== data.repeatPassword) {
                    return notifyWarn('Пароли не совпадают')
                }
                await changePassword(data.oldPassword, data.newPassword);
                reset();
                dispatch(fetchUser())
                notifySuccess('Пароль успешно изменен!')
            }
            onClose();
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            const message = error.response?.data?.message || "Ошибка. Пожалуйста, попробуйте еще раз.";
            if (message.toLowerCase().includes("username")) {
                setError("username", {
                    type: "server",
                    message,
                })
            } else if (message.toLowerCase().includes("email")) {
                setError("email", {
                    type: "server",
                    message,
                })
            } else if (message.includes("Email адрес уже занят.")) {
                setError("email", {
                    type: "server",
                    message,
                })
            } else if (message.toLowerCase().includes("password")) {
                setError("oldPassword", {
                    type: "server",
                    message,
                })
            }
            else if (message.includes("Неверный старый пароль")) {
                setError("oldPassword", {
                    type: "server",
                    message,
                })
            }
            else {
                notifyError(message);
            }
        }
    }

    return {
        title,
        placeholder,
        isPassword,
        handleChangeData,
        handleSubmit,
        control,
        errors
    }
}
