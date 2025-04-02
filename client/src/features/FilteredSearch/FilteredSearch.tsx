import { Button } from "@/shared/ui/Button/Button"
import { Input } from "@/shared/ui/Input/Input"

export const FilteredSearch = () => {
    return (
        <div className="flex gap-[10px] w-full max-w-[1150px] mt-[10px]">
            <Input
            className="min-w-[200px] w-full border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition outline-none p-2 text-start rounded-md text-white focus:outline-none"
            type="text"
            placeholder="Введите название какой нить хуеты" />
            <Button
            className="w-[150px] h-[40px] bg-[#5120B8] text-center text-white rounded-md"
            text="Фильтры" />
        </div>
    )
}
