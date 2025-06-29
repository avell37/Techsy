import { Button, Container, Divider, FormInputController } from "@/shared/ui";
import { useLogin } from "../hooks/useLogin";
import { EmailIcon, HidePasswordIcon, PasswordIcon, ShowPasswordIcon } from "@/shared/assets";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "@/shared/config/consts";
import { GoogleAuth } from "@/features/GoogleAuth";

export const Login = () => {
    const { control, errors, showPassword, handleLogin, toggleShowPassword } = useLogin();

    return (
        <Container noWidthFull>
            <div className="flex flex-col gap-[20px] text-start bg-light-black p-8 rounded-2xl">
                <p className="text-center text-3xl font-bold text-purple-500 mb-10">
                    techsy
                </p>
                <div className="flex flex-col gap-[10px] text-center text-white font-bold">
                    <h1 className="text-2xl">Вход</h1>
                    <p className="text-lg mb-4">Уже были тут?</p>
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
                        className="pl-8 p-[7px] min-w-[400px]"
                        errors={errors}
                        icon={<EmailIcon />}
                    />
                    <FormInputController
                        name="password"
                        control={control}
                        type={showPassword ? "text" : "password"}
                        placeholder="Введите ваш пароль"
                        className="pl-8 p-[7px] min-w-[400px]"
                        errors={errors}
                        icon={
                            <PasswordIcon />
                        }
                        element={
                            <Button
                                type="button"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
                            </Button>
                        }
                    />
                    <Button
                        className="custom-button min-w-[400px] rounded-xl border-1"
                        text="Войти"
                    />
                    <div className="flex justify-center items-center gap-[10px]">
                        <Link
                            className="font-bold text-primary-900"
                            to={REGISTRATION_ROUTE}
                        >
                            Нет аккаунта?
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center gap-[20px]">
                        <Divider variant="h-[2px] w-full" />
                        <p className="text-white text-center text-sm">
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
