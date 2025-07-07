import { ReactNode } from "react";
import { Control, FieldErrors } from "react-hook-form";

export interface FormInputControllerProps {
    name: string;
    control: Control<any>;
    placeholder?: string;
    type?: string;
    icon?: ReactNode;
    element?: ReactNode;
    className?: string;
    errors?: FieldErrors;
}