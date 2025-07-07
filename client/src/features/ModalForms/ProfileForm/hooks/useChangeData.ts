import { changeEmail, changePassword, changeUsername } from "@/entities";
import { useActions, useNotification } from "@/shared/hooks";
import { ProfileHookData } from "../types/ProfileHookData";
import { handleServerFormError } from "@/shared/lib";
import { ChangeDataProps } from "../types/ChangeDataProps";

export const useChangeData = ({ edit, reset, setError, onClose }: ChangeDataProps) => {
    const { fetchUser } = useActions();
    const { notifyError, notifyWarn, notifySuccess } = useNotification();

    const handleChangeData = async (data: ProfileHookData) => {
        try {
            if (edit === 'username' && data.username) {
                if (!data.username.trim()) return notifyWarn("Поле не может быть пустым.")
                await changeUsername(data.username);
                fetchUser();
                reset();
                notifySuccess('Имя пользователя успешно изменено!')
            } else if (edit === 'email' && data.email) {
                if (!data.email.trim()) return notifyWarn("Поле не может быть пустым.")
                await changeEmail(data.email);
                fetchUser();
                reset();
                notifySuccess('Почта успешно изменена!')
            } else if (edit === 'password' && data.oldPassword) {
                if (!data.oldPassword || !data.newPassword || !data.repeatPassword) {
                    return notifyWarn('Заполните все поля.')
                }
                if (data.newPassword !== data.repeatPassword) {
                    return notifyWarn('Пароли не совпадают')
                }
                await changePassword(data.oldPassword, data.newPassword);
                fetchUser();
                reset();
                notifySuccess('Пароль успешно изменен!')
            }
            onClose();
        } catch (err) {
            handleServerFormError<ProfileHookData>(
                err,
                setError,
                {
                    username: "username",
                    email: "email",
                    password: "oldPassword"
                },
                notifyError
            )
        }
    }

    return {
        handleChangeData
    }
}