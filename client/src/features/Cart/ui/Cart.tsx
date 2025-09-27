import { Button } from "@/shared/ui";
import { useCreateOrder } from "../hooks/useCreateOrder";

export const Cart = () => {
    const { basket, totalPrice, handleCreateOrder } = useCreateOrder();
    
    return (
        <div className="flex flex-col border border-primary-900/30 bg-gradient rounded-xl p-6">
            <div className="flex flex-col justify-between gap-[20px] h-full">
                <h1 className="text-white font-bold text-xl">Корзина</h1>
                <div className="flex flex-col gap-[20px]">
                    <p className="text-white">
                        Количество товаров: {basket?.length}
                    </p>
                    <p className="text-white font-bold text-xl">
                        К оплате: {totalPrice.toLocaleString()} Р.
                    </p>
                    <Button
                        variant="default"
                        size="none"
                        className="flex justify-center items-center max-w-[320px] w-full h-[60px] border-2 border-indigo-900 rounded-xl hover:border-primary-900
                        hover:bg-primary-300/30 transition-all text-white cursor-pointer"
                        onClick={handleCreateOrder}
                    >
                        Перейти к оплате
                    </Button>
                </div>
            </div>
        </div>
    );
};
