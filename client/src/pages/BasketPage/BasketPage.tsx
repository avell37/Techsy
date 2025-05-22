import { Header } from "@/widgets/Header";
import { Cart } from "@/features/Cart";
import { CartDevice } from "@/features/Cart/ui/CartDevice";

export const BasketPage = () => {
    return (
        <div className="flex flex-col gap-[50px]">
            <Header />
            <div className="flex justify-center gap-[50px]">
                <div className="flex flex-col gap-[20px] w-full max-w-[800px]">
                    <CartDevice />
                    <CartDevice />
                    <CartDevice />
                    <CartDevice />
                </div>
                <Cart />
            </div>
        </div>
    );
};
