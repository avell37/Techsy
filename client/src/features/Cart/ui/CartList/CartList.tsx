import type { IBasketItem } from "@/entities/Basket";
import { CartDevice } from "@/features/Cart"
import { Spinner } from "@/shared/ui";

interface CartListProps {
    basket: IBasketItem[],
    loading: boolean;
    isFavorite: (deviceId: string) => boolean;
    onToggleFavorites: (deviceId: string) => void;
}

export const CartList = ({basket, loading, isFavorite, onToggleFavorites}: CartListProps) => {
    if (loading) return <Spinner width="100px" height="100px" />

    if (!basket.length) {
        return (
            <div className="text-white text-center text-xl mt-2">
                Корзина пуста. Добавьте товар.
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-[20px] w-full">
            {basket.map((device) => (
                <CartDevice
                    key={device.id}
                    device={device}
                    isFavorite={isFavorite(device.deviceId)}
                    onClick={() => onToggleFavorites(device.deviceId)}
                />
            ))}
        </div>
    )
}
