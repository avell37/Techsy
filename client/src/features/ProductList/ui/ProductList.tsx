import { Pagination } from "@/shared/ui";
import { useProductList } from "../model/hooks/useProductList";
import { DeviceCard, type IDevice } from "@/entities/Device";

export const ProductList = () => {
    const { currentItems, totalPages, currentPage, isFavorite, 
        setCurrentPage, handleToggleFavorites, handleAddToCart, checkInBasket
    } = useProductList();

    return (
        <div className="flex flex-col justify-between">
            <div className="gap-[20px] mt-[10px] cards-responsive">
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
                <Pagination 
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onChangePage={setCurrentPage}
                />
            </div>
        </div>
    );
};
