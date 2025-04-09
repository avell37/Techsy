import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { useState } from "react";
import { registration } from "@/shared/api/userApi";
import { UserIcon } from "../../../public/icons/UserIcon";
import { EmailIcon } from "../../../public/icons/EmailIcon";
import { PasswordIcon } from "../../../public/icons/PasswordIcon";
import { ShowPasswordIcon } from "../../../public/icons/ShowPasswordIcon";
import { HidePasswordIcon } from "../../../public/icons/HidePasswordIcon";
import { GoogleIcon } from "../../../public/icons/GoogleIcon";
import { GithubIcon } from "../../../public/icons/GithubIcon";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE } from "@/shared/config/consts";

export const Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        await registration(username, email, password);
        navigate(SHOP_ROUTE);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col justify-center text-start w-full gap-[20px]">
            <div className="p-28 flex flex-col gap-[20px]">
                <h1 className="text-white text-3xl font-bold">Регистрация</h1>
                <p className="text-white text-xl font-bold">
                    Начнем наше знакомство?
                </p>
                <form
                    className="flex flex-col gap-[20px]"
                    onSubmit={handleSubmit}
                >
                    <p className="text-white">Username</p>
                    <Input
                        className="max-w-[500px] w-full h-[40px] bg-[#111729] rounded-full border-gray-700 border-2 pl-8 text-white focus:border-[#4F45E4] outline-none"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        type="text"
                        placeholder="Введите ваш юзернейм"
                    >
                        <UserIcon className="absolute top-3 left-3" />
                    </Input>
                    <p className="text-white">E-mail</p>
                    <Input
                        className="max-w-[500px] w-full h-[40px] bg-[#111729] rounded-full text-white pl-8 border-gray-700 border-2 focus:border-[#4F45E4] outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Введите ваш e-mail"
                    >
                        <EmailIcon className="absolute top-3 left-3" />
                    </Input>
                    <p className="text-white">Password</p>
                    <Input
                        className="max-w-[500px] w-full h-[40px] bg-[#111729] rounded-full border-gray-700 border-2 text-white pl-8 focus:border-[#4F45E4] outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "password" : "text"}
                        placeholder="Введите ваш password"
                    >
                        <PasswordIcon className="absolute top-3 left-3" />
                        <Button
                            className="absolute right-5 top-3"
                            onClick={toggleShowPassword}
                        >
                            {showPassword ? (
                                <ShowPasswordIcon />
                            ) : (
                                <HidePasswordIcon />
                            )}
                        </Button>
                    </Input>
                    <div className="flex justify-center items-center gap-[10px]">
                        <Button
                            className="relative flex justify-center items-center pl-4 w-[245px] h-[40px] border-gray-700 border-1 bg-[#111729] text-white rounded-full"
                            text="Войти с помощью Google"
                        >
                            <GoogleIcon className="absolute left-2 bottom-[11px]" />
                        </Button>
                        <Button
                            className="relative flex justify-center items-center pl-4 w-[245px] h-[40px] border-gray-700 border-1 bg-[#111729] text-white rounded-full"
                            text="Войти с помощью Github"
                        >
                            <GithubIcon className="absolute left-2 bottom-[10px]" />
                        </Button>
                    </div>
                    <Button
                        className="max-w-[500px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                        text="Зарегистрироваться"
                    />
                </form>
                <div className="flex flex-col items-center">
                    <p className="text-white">Уже есть аккаунт?</p>
                    <Link
                        className="mt-[5px] font-bold text-[#5120B8]"
                        to={LOGIN_ROUTE}
                    >
                        Войти
                    </Link>
                </div>
            </div>
        </div>
    );
};
