import { Input, Button, Container } from "@/shared/ui";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "@/shared/config/consts";
import { GoogleAuth } from "@/features/GoogleAuth";
import {
    HidePasswordIcon,
    ShowPasswordIcon,
    PasswordIcon,
    EmailIcon,
} from "@/shared/assets";
import { Controller } from "react-hook-form";
import { LoginProps } from "../model/types/LoginProps";

export const LoginView = ({
    handleLogin,
    handleSubmit,
    showPassword,
    toggleShowPassword,
    control,
    errors
}: LoginProps) => {
    console.log(errors);
    return (
        <Container noWidthFull={true}>
            <div className="flex flex-col gap-[20px] text-start bg-[#0d091d] p-8 rounded-2xl">
                <p className="text-center text-3xl font-bold text-purple-500 mb-10">
                    techsy
                </p>
                <div className="flex flex-col gap-[10px] text-center text-white font-bold">
                    <h1 className="text-2xl">Вход</h1>
                    <p className="text-lg mb-4">Уже были тут?</p>
                </div>
                <form
                    className="flex flex-col gap-[20px]"
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                className="pl-8 p-[7px] custom-input min-w-[400px]"
                                type="email"
                                placeholder="Введите ваш e-mail"
                                error={errors.email?.message}
                            >
                                <EmailIcon className="absolute top-3 left-3" />
                            </Input>
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                className="pl-8 p-[7px] custom-input min-w-[400px]"
                                type={showPassword ? "password" : "text"}
                                placeholder="Введите ваш password"
                                error={errors.password?.message}
                            >
                                <PasswordIcon className="absolute top-3 left-3" />
                                <Button
                                    type="button"
                                    className="absolute right-5 top-3"
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? (
                                        <ShowPasswordIcon />
                                    ) : (
                                        <HidePasswordIcon />
                                    )}
                                </Button>
                            </Input>)} />
                    <Button
                        className="custom-button min-w-[400px] rounded-xl border-1"
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
        </Container >
    );
};
