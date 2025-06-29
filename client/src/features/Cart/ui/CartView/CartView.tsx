import { Iomoney } from "@/shared/assets/icons/Iomoney";
import { Button } from "@/shared/ui";
import { CartSchema } from "../../model/types/CartSchema";

export const CartView = ({
    totalPrice,
    setSelectedPayment,
    handleCreateOrder,
}: CartSchema) => {
    const handleSelectYoomoneyPayment = () => setSelectedPayment("yoomoney")
    return (
        <div className="flex flex-col justify-between gap-[30px] h-full">
            <div className="flex flex-col gap-[20px]">
                <p className="text-white text-xl">Вариант оплаты:</p>
                <div className="flex gap-[20px] flex-wrap">
                    <Button
                        onClick={handleSelectYoomoneyPayment}
                        type="button"
                        className="flex justify-center items-center min-h-[80px] w-full border-[2px] 
                        border-indigo-900 rounded-xl hover:border-light-purple 
                        hover:bg-primary-300/30 active:border-light-purple focus:border-light-purple 
                        transition-all max-w-[150px] cursor-pointer"
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
                    className="max-w-[320px] w-full h-[60px] border-2 border-indigo-900 rounded-xl hover:border-light-purple
                    hover:bg-primary-300/30 transition-all text-white cursor-pointer"
                    text="Перейти к оплате"
                    onClick={handleCreateOrder}
                />
            </div>
        </div>
    );
};
