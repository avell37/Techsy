import { Header } from "@/widgets/Header/ui/Header"
import { Button } from "@/shared/ui/Button/Button"

export const AdminPage = () => {
    return (
        <div className="flex flex-col gap-[50px]">
            <Header />
            <div className="flex flex-col gap-[50px] justify-center items-center">
                <p className="text-white font-bold text-4xl">Привет, босс! Добавим новый товар?</p>
                <Button
                className="w-[500px] h-[50px] bg-[#5120B8] text-white rounded-full"
                text="Добавить товар" /> 
            </div>
        </div>
    )
}
