import { useState } from "react";
import { login } from "@/shared/api/userApi";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { LoginView } from "./LoginView";
import { useNotification } from "@/shared/hooks/useNotification";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const { notifySuccess, notifyError } = useNotification();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate(SHOP_ROUTE);
            notifySuccess("Успешный вход!");
        } catch (err) {
            console.error(err);
            notifyError("Непредвиденная ошибка... Попробуй еще раз!");
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <LoginView
            handleSubmit={handleSubmit}
            setEmail={setEmail}
            email={email}
            setPassword={setPassword}
            password={password}
            toggleShowPassword={toggleShowPassword}
            showPassword={showPassword}
        />
    );
};
