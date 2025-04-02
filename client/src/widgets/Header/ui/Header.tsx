export const Header: React.FC = () => {
    return (
        <div className="sticky top-0 flex justify-between pl-20 pr-20 w-full items-center bg-[#0F0F1A] p-4 border-b border-[#5120B8]/30 z-[1000] h-[100px]">
            <a href="/" className="flex justify-center text-xl text-purple-500 font-bold">techsy</a>
            <div className="flex justify-center gap-[30px]">
                <div className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer">Профиль</div>
                <div className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer">Корзина</div>
                <div className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer">Выйти</div>
            </div>
        </div>
    )
}