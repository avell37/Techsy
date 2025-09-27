import { EmailIcon, PasswordIcon } from "@/shared/assets";
import { Button } from "@/shared/ui";
import { Eye, EyeOff } from "lucide-react";

interface FieldsProps {
    showPassword: boolean;
    toggleShowPassword: () => void;
}

export const LoginFields = ({showPassword, toggleShowPassword}: FieldsProps) => [
    {
        name: "email",
        type: "email",
        placeholder: "Введите ваш e-mail",
        icon: <EmailIcon />
    },
    {
        name: "password",
        type: showPassword ? "text" : "password",
        placeholder: 'Введите ваш пароль',
        icon: <PasswordIcon />,
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