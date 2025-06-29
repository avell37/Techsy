import { useAddToBasket, useAppSelector, useToggleFavorites } from "@/shared/hooks";
import { selectFilteredDevices } from "@features/ProductList";
import { checkFavoriteDevices, getToken, countPagination } from "@/shared/lib";
import { Pagination, Spinner } from "@/shared/ui";
import { IDevice } from "@/shared/types";
import { DeviceCard, favoriteSelector } from "@/entities";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

export const ProductList = () => {
    const filteredDevices = useAppSelector(selectFilteredDevices);
    const favoriteDevices = useAppSelector(favoriteSelector.favoriteDevices);
    const isLoaded = useAppSelector(favoriteSelector.isLoaded);
    const currentPage = useAppSelector(favoriteSelector.currentPage);
    const { toggleFavorites } = useToggleFavorites();
    const { addToBasket, checkInBasket } = useAddToBasket();
    const navigate = useNavigate();

    const isFavorite = useMemo(() => {
        return (deviceId: string) =>
            checkFavoriteDevices({ deviceId, favoriteDevices });
    }, [favoriteDevices])

    if (getToken('token') && !isLoaded) {
        return <Spinner width="100px" height="100px" />
    }

    const { currentItems, totalPages } = countPagination({
        devices: filteredDevices,
        currentPage,
        itemsPerPage: 8,
    });

    const handleToggleFavorites = (deviceId: string) => toggleFavorites(deviceId);
    const handleAddToCart = (deviceId: string) => {
        if (checkInBasket(deviceId)) navigate('/basket');
        addToBasket(deviceId);
    }

    return (
        <div className="flex flex-col justify-between">
            <div className="grid grid-cols-4 gap-[20px] mt-[10px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-lg:gap-[10px]">
                {currentItems?.map((device: IDevice) => (
                    <DeviceCard
                        key={device.id}
                        device={device}
                        isFavorite={isFavorite(device.id)}
                        onClick={() => handleToggleFavorites(device.id)}
                        addToBasket={() => handleAddToCart(device.id)}
                        checkInBasket={checkInBasket}
                    />
                ))}
            </div>
            <div className="mt-auto">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
};
