import {
    useAppDispatch,
    useAppSelector,
    useNotification,
} from "@/shared/hooks";
import { DeviceCard } from "@/shared/ui";
import { toggleFavorites } from "@/shared/lib/toggleFavorites/toggleFavorites";
import { checkFavoriteDevices } from "@/shared/lib/checkFavoriteDevices/checkFavoriteDevices";

export const FavoritesList = () => {
    const { favoriteDevices } = useAppSelector(
        (state) => state.favoriteReducer
    );

    const dispatch = useAppDispatch();
    const { notifySuccess, notifyError } = useNotification();

    return (
        <div className="pl-20 pt-4">
            <h1 className="text-white text-2xl font-bold">Избранные товары</h1>
            <div className="flex gap-[15px] pt-6">
                {favoriteDevices.map((favorite) => (
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
                    />
                ))}
            </div>
        </div>
    );
};
