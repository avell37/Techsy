import { Header } from "@/widgets/Header";
import { Cart } from "@/features/Cart";
import { CartDevice } from "@/features/Cart/ui/CartDevice/CartDevice";
import { useEffect } from "react";
import {
    useAppDispatch,
    useAppSelector,
    useNotification,
} from "@/shared/hooks";
import { fetchBasket } from "@/entities/Basket";
import { Spinner } from "@/shared/assets";
import { checkFavoriteDevices } from "@/shared/lib/checkFavoriteDevices/checkFavoriteDevices";
import { toggleFavorites } from "@/shared/lib/toggleFavorites/toggleFavorites";
import { fetchShippingInfo } from "@/entities";

const BasketPage = () => {
    const dispatch = useAppDispatch();
    const { favoriteDevices } = useAppSelector(
        (state) => state.favoriteReducer
    );
    const { basket, loading } = useAppSelector((state) => state.basketReducer);
    const { notifyError, notifySuccess } = useNotification();

    useEffect(() => {
        dispatch(fetchShippingInfo());
    }, []);

    useEffect(() => {
        dispatch(fetchBasket());
    }, [dispatch]);

    return (
        <div className="flex flex-col gap-[50px]">
            <Header />
            <div className="flex justify-center gap-[50px]">
                <div className="flex flex-col gap-[20px] w-full max-w-[850px]">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <Spinner width="100px" height="100px" />
                        </div>
                    ) : basket.length > 0 ? (
                        basket.map((device) => (
                            <CartDevice
                                key={device.id}
                                device={device}
                                isFavorite={checkFavoriteDevices({
                                    deviceId: device.id,
                                    favoriteDevices,
                                })}
                                onClick={() =>
                                    toggleFavorites({
                                        device: device.device,
                                        notifySuccess,
                                        notifyError,
                                        dispatch,
                                    })
                                }
                            />
                        ))
                    ) : (
                        <div className="text-white text-center text-xl mt-2">
                            🛒 Корзина пуста. Добавьте товар.
                        </div>
                    )}
                </div>
                <Cart />
            </div>
        </div>
    );
};

export default BasketPage;
