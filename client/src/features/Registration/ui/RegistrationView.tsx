import { Input, Button, Container } from "@/shared/ui";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "@/shared/config/consts";
import { RegistrationSchema } from "@features/Registration";
import {
    PasswordIcon,
    EmailIcon,
    ShowPasswordIcon,
    HidePasswordIcon,
    UserIcon,
} from "@shared/assets";
import { GoogleAuth } from "@/features/GoogleAuth";

export const RegistrationView = ({
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    toggleShowPassword,
    showPassword,
    handleSubmit,
}: RegistrationSchema) => {
    return (
        <Container>
            <div className="flex flex-col gap-[20px] text-start bg-[#0d091d] p-8 rounded-2xl">
                <p className="text-center text-3xl font-bold text-purple-500 mb-10">techsy</p>
                <div className="flex flex-col gap-[10px] text-center text-white font-bold">
                    <h1 className="text-2xl">Регистрация</h1>
                    <p className="text-lg mb-4">Начнем наше знакомство?</p>
                </div>
                    <form
                        className="flex flex-col gap-[20px]"
                        onSubmit={handleSubmit}
                    >
                    <Input
                        className="min-w-[400px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 pl-8 text-white focus:border-[#4F45E4] outline-none"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        type="text"
                        placeholder="Введите ваш юзернейм"
                    >
                        <UserIcon className="absolute top-3 left-3" />
                    </Input>
                        <Input
                            className="min-w-[400px] w-full h-[40px] bg-[#111729] rounded-xl text-white pl-8 border-gray-700 border-2 focus:border-[#4F45E4] outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Введите ваш e-mail"
                        >
                            <EmailIcon className="absolute top-3 left-3" />
                        </Input>
                        <Input
                            className="min-w-[400px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-8 focus:border-[#4F45E4] outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "password" : "text"}
                            placeholder="Введите ваш пароль"
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
                        </Input>
                        <Button
                            className="min-w-[400px] w-full h-[40px] bg-[#5120B8] text-white rounded-xl cursor-pointer"
                            text="Зарегистрироваться"
                        />
                        <div className="flex justify-center items-center gap-[10px]">
                            <Link
                                className="font-bold text-[#5120B8]"
                                to={LOGIN_ROUTE}
                            >
                                Уже есть аккаунт?
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
        </Container>
    );
};