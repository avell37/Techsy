import { UseFormReset, UseFormSetError } from "react-hook-form";
import { ProfileHookData } from "./ProfileHookData";

export type EditType = 'username' | 'email' | 'password';

export interface ChangeDataProps {
    edit: EditType;
    reset: UseFormReset<ProfileHookData>;
    setError: UseFormSetError<ProfileHookData>;
    onClose: () => void;
}