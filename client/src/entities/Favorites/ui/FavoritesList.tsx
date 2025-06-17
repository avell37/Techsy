import { DeviceCard } from "@/entities/Device";
import { useAppDispatch, useAppSelector, useNotification } from "@/shared/hooks";
import { toggleFavorites, checkFavoriteDevices, addToBasket } from "@/shared/lib";
import { countPagination } from "@/shared/lib/countPagination/countPagination";
import { Pagination } from "@/shared/ui/Pagination/Pagination";

export const FavoritesList = () => {
    const { favoriteDevices, currentPage } = useAppSelector(
        (state) => state.favoriteReducer
    );
    const dispatch = useAppDispatch();
    const { notifySuccess, notifyWarn, notifyError } = useNotification();

    const { currentItems, totalPages } = countPagination({
        devices: favoriteDevices.map((fav) => fav.device),
        currentPage,
        itemsPerPage: 10,
    });

    return (
        <div className="p-6 border-1 rounded-xl border-[#5120B8]/30 mt-5 filters-bg-gradient shadow-lg">
            <h1 className="text-white text-2xl font-bold">Избранные товары:</h1>
            <div className="grid grid-cols-5 gap-[25px] mt-[20px]">
                {currentItems.length > 0 ? (
                    currentItems.map((device) => (
                        <DeviceCard
                            key={device.id}
                            device={device}
                            isFavorite={checkFavoriteDevices({
                                deviceId: device.id,
                                favoriteDevices,
                            })}
                            onClick={() =>
                                toggleFavorites({
                                    device,
                                    notifySuccess,
                                    notifyError,
                                    dispatch,
                                })
                            }
                            addToBasket={() =>
                                addToBasket({
                                    id: device.id,
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
            <div className="mt-auto">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
};
