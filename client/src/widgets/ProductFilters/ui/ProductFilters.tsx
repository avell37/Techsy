export const ProductFilters = () => {
    return (
        <div className="border-r-1 border-[#5120B8]/30 w-[250px]">
            <div className="sticky top-30 flex flex-col justify-center items-center gap-[10px] mt-[20px]">
                <p className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer">Смартфоны</p>
                <p className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer">Компьютеры</p>
                <p className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer">Ноутбуки</p>
                <p className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer">Часы</p>
            </div>
        </div>
    )
}
