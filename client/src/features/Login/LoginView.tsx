import { Input, Button } from "@/shared/ui";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "@/shared/config/consts";
import { LoginProps } from "./types";
import { GoogleAuth } from "../GoogleAuth/GoogleAuth";
import {
    GithubIcon,
    HidePasswordIcon,
    ShowPasswordIcon,
    PasswordIcon,
    EmailIcon,
} from "@/shared/assets";

export const LoginView = ({
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    toggleShowPassword,
}: LoginProps) => {
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
                        <GoogleAuth />
                        <Button
                            className="relative flex justify-center items-center pl-4 w-[245px] h-[40px] border-gray-700 border-1 bg-[#111729] text-white rounded-full"
                            text="Войти с помощью Github"
                        >
                            <GithubIcon className="absolute left-2 bottom-[10px]" />
                        </Button>
                    </div>
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
