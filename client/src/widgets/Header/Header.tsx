export const Header: React.FC = () => {
    return (
        <div className="sticky top-0 flex justify-center m-auto w-full items-center bg-black border-b-[1px] border-gray-700 z-[1000] h-[100px]">
            <a href="/" className="flex justify-center text-xl text-purple-500 font-bold">techsy</a>
            <div className="flex justify-center gap-[30px]">
                <div className="text-white">Профиль</div>
                <div className="text-white">Корзина</div>
                <div className="text-white">Выйти</div>
            </div>
        </div>
    )
}