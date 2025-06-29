import { Cart } from "@/features/Cart";
import { CartDevice } from "@/features/Cart/ui/CartDevice/CartDevice";
import { useAppSelector, useToggleFavorites } from "@/shared/hooks";
import { checkFavoriteDevices } from "@/shared/lib/checkFavoriteDevices/checkFavoriteDevices";
import { Container } from "@/shared/ui";
import { basketSelector, favoriteSelector } from "@/entities";
import { SpinnerAnimation } from "@/shared/assets";
import { useMemo } from "react";

const BasketPage = () => {
    const favoriteDevices = useAppSelector(favoriteSelector.favoriteDevices);
    const basket = useAppSelector(basketSelector.basket);
    const loading = useAppSelector(basketSelector.loading)
    const { toggleFavorites } = useToggleFavorites();

    const isFavorite = useMemo(() => {
        return (deviceId: string) =>
            checkFavoriteDevices({ deviceId, favoriteDevices });
    }, [favoriteDevices])

    const handleToggleFavorites = (deviceId: string) => toggleFavorites(deviceId);

    return (
        <Container>
            <div className="flex justify-center gap-[50px] mt-5 filters-bg-gradient p-6 rounded-xl">
                <div className="flex flex-col gap-[20px] w-full">
                    {loading ? (
                        <SpinnerAnimation width="100px" height="100px" />
                    ) : basket.length > 0 ? (
                        basket.map((device) => (
                            <CartDevice
                                key={device.id}
                                device={device}
                                isFavorite={isFavorite(device.id)}
                                onClick={() => handleToggleFavorites(device.deviceId)}
                            />
                        ))
                    ) : (
                        <div className="text-white text-center text-xl mt-2">
                            Корзина пуста. Добавьте товар.
                        </div>
                    )}
                </div>
                <Cart />
            </div>
        </Container>
    );
};

export default BasketPage;
