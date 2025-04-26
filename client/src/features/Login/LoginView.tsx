import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { EmailIcon } from "@shared/assets/EmailIcon";
import { PasswordIcon } from "@shared/assets/PasswordIcon";
import { ShowPasswordIcon } from "@shared/assets/ShowPasswordIcon";
import { HidePasswordIcon } from "@shared/assets/HidePasswordIcon";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "@/shared/config/consts";
import { LoginProps } from "./types";

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
