import { DeviceCard } from "@/entities/Device";
import { useFavorites } from "../model/hooks/useFavorites";
import { Pagination } from "@/shared/ui/custom";

export const FavoritesList = () => {
    const { favorites, currentItems, totalPages, currentPage, isFavorite,
        setCurrentPage, handleToggleFavorites, handleAddToCart, checkInBasket
    } = useFavorites();

    return (
        <div className="p-6 border-1 rounded-xl border-primary-900/30 mt-5 bg-gradient shadow-lg">
            <h1 className="text-white text-2xl font-bold">Ваши избранные товары {`(${favorites.length})`}</h1>
            <div className="mt-[20px] favorite-cards-responsive">
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
            {totalPages > 1 ? (
                <div className="mt-auto">
                    <Pagination 
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onChangePage={setCurrentPage}
                    />
                </div>
            ) : null}
        </div>
    );
};
