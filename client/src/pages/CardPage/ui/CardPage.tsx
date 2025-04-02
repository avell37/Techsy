import { Header } from "@/widgets/Header/ui/Header"
import { Button } from "@/shared/ui/Button/Button";
import qwe from './image.png';
import ewq from './star.png';
import user from './default-user.png';

export const CardPage = () => {
    return (
        <div className="flex flex-col gap-[50px]">
            <Header />
            <div className="flex border-b border-[#5120B8]/30">
                <img src={qwe} className="min-w-[100px] max-w-[500px] max-h-[500px] min-h-[100px] h-full w-full" />
                <div className="flex flex-col mt-[50px] gap-[30px]">
                    <p className="text-white font-bold text-3xl">IPhone 16 PRO MAX</p>
                    <div className="flex items-center gap-[5px]">
                        <img src={ewq} className="w-[20px] h-[20px]" />
                        <span className="text-white font-bold text-2xl">5</span>
                    </div>
                    <p className="text-white text-xl"><span className="font-bold">Цена:</span> 129,999 Р.</p>
                    <p className="text-white text-xl"><span className="font-bold">Бренд:</span> Apple</p>
                    <p className="text-white text-xl"><span className="font-bold">Цвет:</span> черный</p>
                    <Button
                    className="w-[200px] h-[40px] bg-[#5120B8] text-white rounded-xl font-bold"
                    text="Добавить в корзину" />
                </div>
                <div className="mt-8 ml-36 border-1 border-[#5120B8]/30 rounded-xl w-[500px] max-h-[490px] h-full">
                    <p className="text-white text-center font-bold mt-[5px]">Характеристики:</p>
                    <div className="flex flex-col gap-[10px] ml-[7px] mb-[20px]">
                        <p className="text-white">Тип: Смартфон</p>
                        <p className="text-white">Бренд: Apple</p>
                        <p className="text-white">Модель: Apple IPhone 16</p>
                        <p className="text-white">Процессор: Apple A16 Bionic</p>
                        <p className="text-white">Диагональ экрана: 6.1"</p>
                        <p className="text-white">Материал корпуса: металл, стекло</p>
                        <p className="text-white">Объем оперативной памяти: 6 ГБ</p>
                        <p className="text-white">Количество основных камер: 2</p>
                        <p className="text-white">Количество мегапикселей основной камеры: 48+12 Мп</p>
                        <p className="text-white">Память: 128 ГБ</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pl-20 gap-[30px]">
                <h1 className="text-white text-2xl font-bold">Отзывы:</h1>
                <div className="border-1 border-[#5120B8]/30 rounded-xl max-w-[1000px] w-full">
                    <div className="flex p-6 gap-[20px]">
                        <img src={user} className="max-w-[70px] max-h-[70px] border-2 border-[#3A177F] rounded-full" />
                        <div className="flex flex-col">
                            <p className="text-white font-bold">avell37</p>
                            <div className="flex items-center gap-[8px]">
                                <span className="text-white">оценка:</span>
                                <div className="flex items-center">
                                    <img src={ewq} className="w-[15px] h-[15px]" />
                                    <span className="text-white text-lg ml-[4px]">5</span>
                                </div>
                            </div>
                            <p className="text-white">Айфон как айфон, че бухтеть?!?!?!Айфон как айфон, че бухтеть?!?!?!Айфон как айфон, че бухтеть?!?!?!Айфон как айфон, че бухтеть?!?!?!Айфон как айфон, че бухтеть?!?!?!Айфон как айфон, че бухтеть?!?!?!Айфон как айфон, че бухтеть?!?!?!Айфон как айфон, че бухтеть?!?!?!Айфон как айфон, че бухтеть?!?!?!</p>
                        </div>
                    </div>
                </div>
                <div className="border-1 border-[#5120B8]/30 rounded-xl max-w-[1000px] w-full">
                    <div className="flex p-6 gap-[20px]">
                        <img src={user} className="max-w-[70px] max-h-[70px] border-2 border-[#3A177F] rounded-full" />
                        <div className="flex flex-col">
                            <p className="text-white font-bold">avell37</p>
                            <div className="flex items-center gap-[8px]">
                                <span className="text-white">оценка:</span>
                                <div className="flex items-center">
                                    <img src={ewq} className="w-[15px] h-[15px]" />
                                    <span className="text-white text-lg ml-[4px]">5</span>
                                </div>
                            </div>
                            <p className="text-white">Айфон как айфон, че бухтеть?!?!?!</p>
                        </div>
                    </div>
                </div>
                <div className="border-1 border-[#5120B8]/30 rounded-xl max-w-[1000px] w-full">
                    <div className="flex p-6 gap-[20px]">
                        <img src={user} className="max-w-[70px] max-h-[70px] border-2 border-[#3A177F] rounded-full" />
                        <div className="flex flex-col">
                            <p className="text-white font-bold">avell37</p>
                            <div className="flex items-center gap-[8px]">
                                <span className="text-white">оценка:</span>
                                <div className="flex items-center">
                                    <img src={ewq} className="w-[15px] h-[15px]" />
                                    <span className="text-white text-lg ml-[4px]">5</span>
                                </div>
                            </div>
                            <p className="text-white">Айфон как айфон, че бухтеть?!?!?!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
