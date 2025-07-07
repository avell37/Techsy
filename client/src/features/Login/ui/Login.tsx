import { Button, Divider, FormInputController } from "@/shared/ui";
import { useLogin } from "../hooks/useLogin";
import {
    EmailIcon,
    HidePasswordIcon,
    PasswordIcon,
    ShowPasswordIcon,
} from "@/shared/assets";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "@/shared/config/consts";
import { GoogleAuth } from "@/features/GoogleAuth";

export const Login = () => {
    const { control, errors, showPassword, handleLogin, toggleShowPassword } =
        useLogin();

    return (
        <div className="flex flex-col gap-[20px] text-start bg-light-black p-8 rounded-2xl w-full max-w-[450px] min-w-[290px] max-sm:p-6 max-md:gap-[10px]">
            <p className="text-center text-2xl font-bold text-purple-500 mb-10 max-sm:text-xl max-md:mb-6 max-sm:mb-4">
                techsy
            </p>
            <div className="flex flex-col gap-[10px] text-center text-white font-bold">
                <h1 className="text-2xl max-md:text-xl max-sm:text-lg">Вход</h1>
                <p className="text-lg mb-4 max-md:text-md max-sm:text-sm">Уже были тут?</p>
            </div>
            <form
                className="flex flex-col gap-[20px]"
                onSubmit={handleLogin}
            >
                <FormInputController
                    name="email"
                    control={control}
                    type="email"
                    placeholder="Введите ваш e-mail"
                    className="pl-8 p-[7px] w-full custom-input-with-icon"
                    errors={errors}
                    icon={<EmailIcon />}
                />
                <FormInputController
                    name="password"
                    control={control}
                    type={showPassword ? "text" : "password"}
                    placeholder="Введите ваш пароль"
                    className="pl-8 p-[7px] w-full custom-input-with-icon"
                    errors={errors}
                    icon={<PasswordIcon />}
                    element={
                        <Button
                            type="button"
                            onClick={toggleShowPassword}
                        >
                            {showPassword ? (
                                <ShowPasswordIcon />
                            ) : (
                                <HidePasswordIcon />
                            )}
                        </Button>
                    }
                />
                <Button
                    className="custom-button w-full rounded-xl border-1"
                    text="Войти"
                />
                <div className="flex justify-center items-center gap-[10px]">
                    <Link
                        className="font-bold text-primary-900 max-sm:text-sm"
                        to={REGISTRATION_ROUTE}
                    >
                        Нет аккаунта?
                    </Link>
                </div>
                <div className="flex flex-col justify-center gap-[20px]">
                    <Divider variant="h-[2px] w-full" />
                    <p className="text-white text-center text-sm max-sm:text-xs">
                        продолжить с помощью:
                    </p>
                </div>
                <div className="flex justify-center items-center gap-[10px]">
                    <GoogleAuth />
                </div>
            </form>
        </div>
    );
};
