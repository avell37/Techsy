import { EditProfileFormProps } from "../types/EditProfileFormProps";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { ProfileYupSchema } from "../lib/ProfileYupSchema";
import { ProfileHookData } from "../types/ProfileHookData";
import { useChangeData } from "./useChangeData";
import { EditType } from "../types/ChangeDataProps";

export const useEditProfileForm = ({ edit, onClose }: EditProfileFormProps) => {

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

    const { handleChangeData } = useChangeData({
        edit: edit as EditType,
        reset,
        setError,
        onClose
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

    return {
        title,
        placeholder,
        isPassword,
        control,
        errors,
        handleChangeData: handleSubmit(handleChangeData),
    }
}
