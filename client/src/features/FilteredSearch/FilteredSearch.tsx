import { Button } from "@/shared/components/Button/Button"
import { Input } from "@/shared/components/Input/Input"

export const FilteredSearch = () => {
    return (
        <div className="flex gap-[10px] w-full max-w-[1150px]">
            <Input
            className="min-w-[200px] w-full border-2 border-gray-800 p-2 text-start rounded-md text-white focus:outline-none"
            type="text"
            placeholder="Введите название какой нить хуеты" />
            <Button
            className="w-[150px] h-[40px] bg-violet-600 text-center text-white rounded-md"
            text="Фильтры" />
        </div>
    )
}
