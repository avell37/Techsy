export interface ProfileFormProps {
    onClose: () => void;
    edit?: "username" | "email" | "password";
}