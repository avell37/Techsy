import {
    useAppDispatch,
    useAppSelector,
    useNotification,
} from "@/shared/hooks";
import { selectFilteredDevices } from "@features/ProductList";
import {
    toggleFavorites,
    checkFavoriteDevices,
    addToBasket,
} from "@/shared/lib";
import Cookies from "js-cookie";
import { Spinner } from "@/shared/assets";
import { Pagination } from "@/shared/ui/Pagination/Pagination";
import { countPagination } from "@/shared/lib/countPagination/countPagination";
import { IDevice } from "@/shared/types";
import { DeviceCard } from "@/entities";

export const ProductList = () => {
    const dispatch = useAppDispatch();
    const filteredDevices = useAppSelector(selectFilteredDevices);
    const { favoriteDevices, isLoaded, currentPage } = useAppSelector(
        (state) => state.favoriteReducer
    );
    const { notifySuccess, notifyWarn, notifyError } = useNotification();

    if (Cookies.get("token") && !isLoaded) {
        return (
            <div className="flex justify-center items-center h-[60%]">
                <Spinner width="100px" height="100px" />
            </div>
        );
    }

    const { currentItems, totalPages } = countPagination({
        devices: filteredDevices,
        currentPage,
        itemsPerPage: 8,
    });

    return (
        <div className="flex flex-col justify-between">
            <div className="grid grid-cols-4 gap-[20px] mt-[10px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-lg:gap-[10px]">
                {currentItems?.map((device: IDevice) => (
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
                ))}
            </div>
            <div className="mt-auto">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
};
