import { Header } from "@/widgets/Header";
import { Cart } from "@/features/Cart";
import { CartDevice } from "@/features/Cart/ui/CartDevice/CartDevice";
import {
    useAppDispatch,
    useAppSelector,
    useNotification,
} from "@/shared/hooks";
import { Spinner } from "@/shared/assets";
import { checkFavoriteDevices } from "@/shared/lib/checkFavoriteDevices/checkFavoriteDevices";
import { toggleFavorites } from "@/shared/lib/toggleFavorites/toggleFavorites";
import { Container } from "@/shared/ui";

const BasketPage = () => {
    const dispatch = useAppDispatch();
    const { favoriteDevices } = useAppSelector(
        (state) => state.favoriteReducer
    );
    const { basket, loading } = useAppSelector((state) => state.basketReducer);
    const { notifyError, notifySuccess } = useNotification();

    return (
        <div className="flex flex-col">
            <Header />
            <Container>
                <div className="flex justify-center gap-[50px] mt-5 filters-bg-gradient p-6 rounded-xl">
                    <div className="flex flex-col gap-[20px] w-full">
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
            </Container>
        </div>
    );
};

export default BasketPage;
