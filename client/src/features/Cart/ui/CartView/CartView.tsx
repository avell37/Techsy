import { Iomoney } from "@/shared/assets/icons/Iomoney";
import { Button } from "@/shared/ui";
import { CartSchema } from "../../model/types/CartSchema";

export const CartView = ({
    setSelectedPayment,
    totalPrice,
    handleCreateOrder,
}: CartSchema) => {
    return (
        <div className="flex flex-col justify-between gap-[30px] h-full">
            <div className="flex flex-col gap-[20px]">
                <p className="text-white text-xl">Вариант оплаты:</p>
                <div className="flex gap-[20px] flex-wrap">
                    <Button
                        onClick={() => setSelectedPayment("yoomoney")}
                        type="button"
                        className="flex justify-center items-center min-h-[80px] w-full border-[2px] border-[#3A177F] rounded-xl hover:border-[#8A4FFF] 
                    hover:bg-[#1A1238]/30 active:border-[#8A4FFF] focus:border-[#8A4FFF] transition-all text-white max-w-[150px] cursor-pointer"
                    >
                        <Iomoney />
                    </Button>
                    <Button
                        className="max-w-[150px] w-full h-[80px] rounded-xl bg-gray-500 text-white cursor-pointer"
                        text="???"
                        disabled
                    />
                    <Button
                        className="max-w-[150px] w-full h-[80px] rounded-xl bg-gray-500 text-white cursor-pointer"
                        text="???"
                        disabled
                    />
                    <Button
                        className="max-w-[150px] w-full h-[80px] rounded-xl bg-gray-500 text-white cursor-pointer"
                        text="???"
                        disabled
                    />
                </div>
            </div>
            <div className="flex flex-col gap-[20px]">
                <p className="text-white font-bold text-xl">
                    К оплате: {totalPrice.toLocaleString()} Р.
                </p>
                <Button
                    className="max-w-[300px] w-full h-[60px] border-2 border-[#3A177F] rounded-xl hover:border-[#8A4FFF] 
                    hover:bg-[#1A1238]/30 transition-all text-white cursor-pointer"
                    text="Перейти к оплате"
                    onClick={handleCreateOrder}
                />
            </div>
        </div>
    );
};
