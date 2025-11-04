import { Button } from "@/shared/ui";
import { Eye, EyeOff, LockKeyhole, Mail, User } from "lucide-react";

interface FieldsProps {
    showPassword: boolean;
    toggleShowPassword: () => void;
}

export const RegistrationFields = ({showPassword, toggleShowPassword}: FieldsProps) => [
    {
        name: "username",
        type: "text",
        placeholder: "Введите ваш никнейм",
        icon: <User className="stroke-white size-4" />
    },
    {
        name: "email",
        type: "email",
        placeholder: "Введите ваш e-mail",
        icon: <Mail className="stroke-white size-4" />
    },
    {
        name: "password",
        type: showPassword ? "text" : "password",
        placeholder: 'Введите ваш пароль',
        icon: <LockKeyhole className="stroke-white size-4" />,
        element: (
            <Button
                type="button"
                variant="default"
                size="none"
                onClick={toggleShowPassword}
                className="h-6 w-6"
            >
                {showPassword ? <EyeOff className="fill-white stroke-white" />
                    : <Eye className="fill-white" /> 
                }
            </Button>
        )
    }
]