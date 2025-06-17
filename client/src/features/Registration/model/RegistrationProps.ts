import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { RegistrationFormProps } from "./RegistrationFormProps";

export interface RegistrationProps {
    showPassword: boolean,
    toggleShowPassword: () => void,
    handleSubmit: UseFormHandleSubmit<RegistrationFormProps>;
    handleRegistration: (data: RegistrationFormProps) => Promise<void>,
    control: Control<RegistrationFormProps>,
    errors: FieldErrors<RegistrationFormProps>,
}