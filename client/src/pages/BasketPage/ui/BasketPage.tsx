import { BasketCard } from "@/shared/ui/BasketCard/BasketCard"
import { Header } from "@/widgets/Header/ui/Header"
import { Cart } from "@/features/Cart/Cart"

export const BasketPage = () => {
    return (
        <div className="flex flex-col gap-[50px]">
            <Header />
            <div className="flex justify-center gap-[50px]">
                <div className="flex flex-col gap-[20px] w-full max-w-[800px]">
                    <BasketCard />
                </div>
                <Cart />
            </div>
        </div>
    )
}
