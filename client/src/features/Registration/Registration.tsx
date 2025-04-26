import { useState } from "react";
import { registration } from "@/shared/api/userApi";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { RegistrationView } from "./RegistrationView";

export const Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await registration(username, email, password);
        navigate(SHOP_ROUTE);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <RegistrationView
            setUsername={setUsername}
            username={username}
            setEmail={setEmail}
            email={email}
            setPassword={setPassword}
            password={password}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            handleSubmit={handleSubmit}
        />
    );
};
