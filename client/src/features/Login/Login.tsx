import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { useState } from "react";
import { login } from "@/shared/api/userApi";
import { EmailIcon } from "../../../public/icons/EmailIcon";
import { PasswordIcon } from "../../../public/icons/PasswordIcon";
import { ShowPasswordIcon } from "../../../public/icons/ShowPasswordIcon";
import { HidePasswordIcon } from "../../../public/icons/HidePasswordIcon";
import { Link, useNavigate } from "react-router-dom";
import { REGISTRATION_ROUTE, SHOP_ROUTE } from "@/shared/config/consts";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        await login(email, password);
        navigate(SHOP_ROUTE);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col justify-center text-start w-full gap-[20px]">
            <div className="p-28 flex flex-col gap-[20px]">
                <h1 className="text-white text-3xl font-bold">Вход</h1>
                <p className="text-white text-xl font-bold">Уже были тут?</p>
                <form
                    className="flex flex-col gap-[20px]"
                    onSubmit={handleSubmit}
                >
                    <Input
                        className="max-w-[500px] w-full h-[40px] bg-[#111729] rounded-full text-white pl-8 border-gray-700 border-2 focus:border-[#4F45E4] outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Введите ваш e-mail"
                    >
                        <EmailIcon className="absolute top-3 left-3" />
                    </Input>
                    <Input
                        className="max-w-[500px] w-full h-[40px] bg-[#111729] rounded-full border-gray-700 border-2 text-white pl-8 focus:border-[#4F45E4] outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "password" : "text"}
                        placeholder="Введите ваш password"
                    >
                        <PasswordIcon className="absolute top-3 left-3" />
                        <Button
                            className="absolute right-3 top-3"
                            onClick={toggleShowPassword}
                        >
                            {showPassword ? (
                                <ShowPasswordIcon />
                            ) : (
                                <HidePasswordIcon />
                            )}
                        </Button>
                    </Input>
                    <Button
                        className="max-w-[500px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                        text="Войти"
                    />
                </form>
                <div className="flex flex-col text-center">
                    <p className="text-white">У вас нет аккаунта?</p>
                    <Link
                        className="mt-[5px] font-bold text-[#5120B8]"
                        to={REGISTRATION_ROUTE}
                    >
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </div>
    );
};
