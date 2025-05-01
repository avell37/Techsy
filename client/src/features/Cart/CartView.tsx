import { Button } from "@/shared/ui";

export const CartView = () => {
    return (
        <div className="border-1 border-[#5120B8] rounded-xl max-w-[400px] w-full p-6">
            <div className="flex flex-col justify-center gap-[30px] h-full">
                <p className="text-white">Доставка: 31 марта (понедельник)</p>
                <div className="flex flex-col gap-[20px]">
                    <p className="text-white text-xl">Вариант оплаты:</p>
                    <Button
                        className="max-w-[300px] w-full h-[40px] rounded-xl bg-[#5120B8] text-white"
                        text="Оплата банковской картой"
                    />
                    <Button
                        className="max-w-[300px] w-full h-[40px] rounded-xl bg-[#5120B8] text-white"
                        text="Оплата при получении заказа"
                    />
                    <Button
                        className="max-w-[300px] w-full h-[40px] rounded-xl bg-[#5120B8] text-white"
                        text="Оплата с помощью СБП"
                    />
                </div>
                <p className="text-white font-bold text-xl">
                    К оплате: 129,999 Р.
                </p>
                <Button
                    className="max-w-[300px] w-full h-[60px] rounded-xl bg-[#5120B8] text-white"
                    text="Перейти к оплате"
                />
            </div>
        </div>
    );
};
