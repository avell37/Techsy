import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { LoginFormProps } from "./LoginFormProps";

export interface LoginProps {
    showPassword: boolean,
    toggleShowPassword: () => void,
    handleSubmit: UseFormHandleSubmit<LoginFormProps>;
    handleLogin: (data: LoginFormProps) => Promise<void>,
    control: Control<LoginFormProps>,
    errors: FieldErrors<LoginFormProps>,
}