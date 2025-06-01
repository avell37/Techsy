import { Input, Button } from "@/shared/ui";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "@/shared/config/consts";
import { LoginSchema } from "../model/types/LoginSchema";
import { GoogleAuth } from "@/features/GoogleAuth";
import {
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
}: LoginSchema) => {
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
                    <Button
                        className="max-w-[500px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                        text="Войти"
                    />
                    <div className="flex justify-center items-center gap-[10px]">
                        <Link
                            className="font-bold text-[#5120B8]"
                            to={REGISTRATION_ROUTE}
                        >
                            Нет аккаунта?
                        </Link>
                    </div>
                    <div className="border-t-1 border-gray-700">
                        <p className="mt-4 text-white text-center text-sm">
                            продолжить с помощью:
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-[10px]">
                        <GoogleAuth />
                    </div>
                </form>
            </div>
        </div>
    );
};
