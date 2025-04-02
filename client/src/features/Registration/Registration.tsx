import { Input } from "@/shared/ui/Input/Input"
import { Button } from "@/shared/ui/Button/Button"

export const Registration = () => {
    return (
        <div className="flex flex-col justify-center text-start w-full gap-[20px]">
            <div className="p-28 flex flex-col gap-[20px]">
                <h1 className="text-white text-3xl font-bold">Регистрация</h1>
                <p className="text-white text-xl font-bold">Начнем наше знакомство?</p>
                <p className="text-white">Username</p>
                <Input 
                className="w-[500px] h-[40px] bg-[#111729] rounded-full border-gray-700 border-2 text-white p-4 focus:border-[#4F45E4] outline-none"
                type="text"
                placeholder="Введите ваш юзернейм" />
                <p className="text-white">E-mail</p>
                <Input 
                className="w-[500px] h-[40px] bg-[#111729] rounded-full text-white p-4 border-gray-700 border-2 focus:border-[#4F45E4] outline-none"
                type="email"
                placeholder="Введите ваш e-mail" />
                <p className="text-white">Password</p>
                <Input 
                className="w-[500px] h-[40px] bg-[#111729] rounded-full border-gray-700 border-2 text-white p-4 focus:border-[#4F45E4] outline-none"
                type="password"
                placeholder="Введите ваш password" />
                <Button 
                className="w-[500px] h-[40px] bg-[#5120B8] text-white rounded-full"
                text="Зарегистрироваться" /> 
                <p className="text-white text-center">Уже есть аккаунт? <a className="text-[#5120B8]" href="#">Войти</a> </p>
            </div>
        </div>
    )
}
