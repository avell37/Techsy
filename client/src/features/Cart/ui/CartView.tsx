import { Button } from "@/shared/ui";

export const CartView = () => {
    return (
        <div className="border-1 border-[#5120B8] rounded-xl max-w-[400px] h-[400px] w-full p-6">
            <div className="flex flex-col justify-between gap-[30px] h-full">
                <div className="flex flex-col gap-[20px]">
                    <p className="text-white text-xl">Вариант оплаты:</p>
                    <Button
                        className="max-w-[300px] w-full h-[40px] rounded-xl bg-[#5120B8] text-white"
                        text="Оплата банковской картой"
                    />
                    <Button
                        className="max-w-[300px] w-full h-[40px] rounded-xl bg-gray-500 text-white"
                        text="Скоро..."
                    />
                    <Button
                        className="max-w-[300px] w-full h-[40px] rounded-xl bg-gray-500 text-white"
                        text="Скоро..."
                    />
                </div>
                <div className="flex flex-col gap-[20px]">
                    <p className="text-white font-bold text-xl">
                        К оплате: 129,999 Р.
                    </p>
                    <Button
                        className="max-w-[300px] w-full h-[60px] rounded-xl bg-[#5120B8] text-white"
                        text="Перейти к оплате"
                    />
                </div>
            </div>
        </div>
    );
};
