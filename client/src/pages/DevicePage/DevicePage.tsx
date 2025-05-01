import { Header } from "@/widgets/Header/ui/Header";
import { Button } from "@/shared/ui/Button/Button";
import { StarIcon, defaultUser } from "@/shared/assets";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchOneDevice } from "@/shared/api/deviceApi";
import { IDevice } from "@/shared/types/IDevice";

export const DevicePage = () => {
    const { id } = useParams();
    const [device, setDevice] = useState<IDevice | null>(null);
    console.log(device);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        if (!id) return;
        const data = await fetchOneDevice(id);
        setDevice(data);
    };

    return (
        <div className="flex flex-col gap-[50px]">
            <Header />
            <div className="pb-8 flex justify-around border-b border-[#5120B8]/30">
                <div className="w-[400px] h-[400px] flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                        src={import.meta.env.VITE_API_URL + "/" + device?.img}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex flex-col gap-[30px]">
                    <p className="text-white font-bold text-3xl">
                        {device?.name}
                    </p>
                    <div className="flex items-center gap-[3px]">
                        <StarIcon width="30px" height="30px" className="" />
                        <span className="text-white font-bold text-2xl">
                            {device?.rating}
                        </span>
                    </div>
                    <p className="text-white text-xl">
                        <span className="font-bold">Цена:</span> {device?.price}{" "}
                        Р.
                    </p>
                    <p className="text-white text-xl">
                        <span className="font-bold">Тип:</span>{" "}
                        {device && device?.type}
                    </p>
                    <p className="text-white text-xl">
                        <span className="font-bold">Бренд:</span>{" "}
                        {device?.brand}
                    </p>
                    <Button
                        className="w-[200px] h-[40px] bg-[#5120B8] text-white rounded-xl font-bold"
                        text="Добавить в корзину"
                    />
                </div>
                <div className="border-1 border-[#5120B8]/30 rounded-xl max-w-[500px] max-h-[490px] w-full h-full">
                    <p className="text-white text-center font-bold mt-[5px]">
                        Характеристики:
                    </p>
                    <div className="flex flex-col gap-[10px] ml-[7px] mb-[20px]">
                        <p className="text-white">Тип: Смартфон</p>
                        <p className="text-white">Бренд: Apple</p>
                        <p className="text-white">Модель: Apple IPhone 16</p>
                        <p className="text-white">
                            Процессор: Apple A16 Bionic
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pl-20 gap-[30px]">
                <h1 className="text-white text-2xl font-bold">Отзывы:</h1>
                <div className="border-1 border-[#5120B8]/30 rounded-xl max-w-[1000px] w-full">
                    <div className="flex p-6 gap-[20px]">
                        <img
                            src={defaultUser}
                            className="max-w-[70px] max-h-[70px] border-2 border-[#3A177F] rounded-full"
                        />
                        <div className="flex flex-col">
                            <p className="text-white font-bold">avell37</p>
                            <div className="flex items-center gap-[8px]">
                                <span className="text-white">оценка:</span>
                                <div className="flex items-center">
                                    <StarIcon
                                        width="15px"
                                        height="15px"
                                        className=""
                                    />
                                    <span className="text-white text-lg ml-[4px]">
                                        5
                                    </span>
                                </div>
                            </div>
                            <p className="text-white">
                                Айфон как айфон, че бухтеть?!?!?!Айфон как
                                айфон, че бухтеть?!?!?!Айфон как айфон, че
                                бухтеть?!?!?!Айфон как айфон, че
                                бухтеть?!?!?!Айфон как айфон, че
                                бухтеть?!?!?!Айфон как айфон, че
                                бухтеть?!?!?!Айфон как айфон, че
                                бухтеть?!?!?!Айфон как айфон, че
                                бухтеть?!?!?!Айфон как айфон, че бухтеть?!?!?!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-1 border-[#5120B8]/30 rounded-xl max-w-[1000px] w-full">
                    <div className="flex p-6 gap-[20px]">
                        <img
                            src={defaultUser}
                            className="max-w-[70px] max-h-[70px] border-2 border-[#3A177F] rounded-full"
                        />
                        <div className="flex flex-col">
                            <p className="text-white font-bold">avell37</p>
                            <div className="flex items-center gap-[8px]">
                                <span className="text-white">оценка:</span>
                                <div className="flex items-center">
                                    <StarIcon
                                        width="15px"
                                        height="15px"
                                        className=""
                                    />
                                    <span className="text-white text-lg ml-[4px]">
                                        5
                                    </span>
                                </div>
                            </div>
                            <p className="text-white">
                                Айфон как айфон, че бухтеть?!?!?!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-1 border-[#5120B8]/30 rounded-xl max-w-[1000px] w-full">
                    <div className="flex p-6 gap-[20px]">
                        <img
                            src={defaultUser}
                            className="max-w-[70px] max-h-[70px] border-2 border-[#3A177F] rounded-full"
                        />
                        <div className="flex flex-col">
                            <p className="text-white font-bold">avell37</p>
                            <div className="flex items-center gap-[8px]">
                                <span className="text-white">оценка:</span>
                                <div className="flex items-center">
                                    <StarIcon
                                        width="15px"
                                        height="15px"
                                        className=""
                                    />
                                    <span className="text-white text-lg ml-[4px]">
                                        5
                                    </span>
                                </div>
                            </div>
                            <p className="text-white">
                                Айфон как айфон, че бухтеть?!?!?!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
