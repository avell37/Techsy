import { useState } from "react";
import { login } from "@/shared/api/userApi";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { LoginView } from "./LoginView";
import { useNotification, useAppDispatch } from "@/shared/hooks";
import { fetchUser } from "@/entities/User";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { notifySuccess, notifyError } = useNotification();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await login(email, password);
            await dispatch(fetchUser());
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
