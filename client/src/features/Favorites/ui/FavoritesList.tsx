import {
    useAppDispatch,
    useAppSelector,
    useNotification,
} from "@/shared/hooks";
import { DeviceCard } from "@/shared/ui";
import {
    toggleFavorites,
    checkFavoriteDevices,
    addToBasket,
} from "@/shared/lib";

export const FavoritesList = () => {
    const { favoriteDevices } = useAppSelector(
        (state) => state.favoriteReducer
    );
    const dispatch = useAppDispatch();
    const { notifySuccess, notifyWarn, notifyError } = useNotification();

    return (
        <div className="pl-20 pt-4">
            <h1 className="text-white text-2xl font-bold">Избранные товары:</h1>
            <div className="flex gap-[15px] pt-6">
                {favoriteDevices.length > 0 ? (
                    favoriteDevices.map((favorite) => (
                        <DeviceCard
                            key={favorite.id}
                            device={favorite.device}
                            isFavorite={checkFavoriteDevices({
                                deviceId: favorite.device.id,
                                favoriteDevices,
                            })}
                            onClick={() =>
                                toggleFavorites({
                                    device: favorite.device,
                                    notifySuccess,
                                    notifyError,
                                    dispatch,
                                })
                            }
                            addToBasket={() =>
                                addToBasket({
                                    id: favorite.device.id,
                                    notifySuccess,
                                    notifyWarn,
                                    notifyError,
                                })
                            }
                        />
                    ))
                ) : (
                    <div className="text-white">Пусто...</div>
                )}
            </div>
        </div>
    );
};
