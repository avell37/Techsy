import { DeviceCard } from "@/shared/ui";
import {
    useAppDispatch,
    useAppSelector,
    useNotification,
} from "@/shared/hooks";
import { selectFilteredDevices } from "@features/ProductList";
import { toggleFavorites } from "@/shared/lib/toggleFavorites/toggleFavorites";
import { checkFavoriteDevices } from "@/shared/lib/checkFavoriteDevices/checkFavoriteDevices";
import Cookies from "js-cookie";
import { Spinner } from "@/shared/assets";
import { addToBasket } from "@/shared/lib";

export const ProductList = () => {
    const dispatch = useAppDispatch();
    const filteredDevices = useAppSelector(selectFilteredDevices);
    const { favoriteDevices, isLoaded } = useAppSelector(
        (state) => state.favoriteReducer
    );
    const { notifySuccess, notifyWarn, notifyError } = useNotification();
    console.log(favoriteDevices);

    if (Cookies.get("token") && !isLoaded) {
        return (
            <div className="flex justify-center items-center h-[60%]">
                <Spinner width="100px" height="100px" />
            </div>
        );
    }

    return (
        <div className="flex gap-[20px] flex-wrap max-w-[1200px] mt-[10px]">
            {filteredDevices?.map((device) => (
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
    );
};
