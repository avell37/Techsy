import { favoriteSelector } from "@/entities";
import { DeviceCard } from "@/entities/Device";
import { useAddToBasket, useAppSelector, useToggleFavorites } from "@/shared/hooks";
import { checkFavoriteDevices } from "@/shared/lib";
import { countPagination } from "@/shared/lib/countPagination/countPagination";
import { Pagination } from "@/shared/ui/Pagination/Pagination";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const FavoritesList = () => {
    const navigate = useNavigate();
    const favoriteDevices = useAppSelector(favoriteSelector.favoriteDevices);
    const currentPage = useAppSelector(favoriteSelector.currentPage);
    const { addToBasket, checkInBasket } = useAddToBasket();
    const { toggleFavorites } = useToggleFavorites();

    const { currentItems, totalPages } = countPagination({
        devices: favoriteDevices.map((fav) => fav.device),
        currentPage,
        itemsPerPage: 10,
    });

    const isFavorite = useMemo(() => {
        return (deviceId: string) =>
            checkFavoriteDevices({ deviceId, favoriteDevices });
    }, [favoriteDevices])

    const handleToggleFavorites = (deviceId: string) => toggleFavorites(deviceId);
    const handleAddToCart = (deviceId: string) => {
        if (checkInBasket(deviceId)) navigate('/basket');
        addToBasket(deviceId);
    }

    return (
        <div className="p-6 border-1 rounded-xl border-primary-900/30 mt-5 filters-bg-gradient shadow-lg">
            <h1 className="text-white text-2xl font-bold">Избранные товары:</h1>
            <div className="grid grid-cols-5 gap-[25px] mt-[20px]">
                {currentItems.length ? (
                    currentItems.map((device) => (
                        <DeviceCard
                            key={device.id}
                            device={device}
                            isFavorite={isFavorite(device.id)}
                            onClick={() => handleToggleFavorites(device.id)}
                            addToBasket={() => handleAddToCart(device.id)}
                            checkInBasket={checkInBasket}
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
