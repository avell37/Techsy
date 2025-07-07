import { useActions, useAppSelector } from "@/shared/hooks";
import { getToken } from "@/shared/lib";
import { FC, useEffect } from "react";
import { userSelector } from "@/entities";

interface InitProps {
    children: React.ReactNode;
}

export const InitUser: FC<InitProps> = ({ children }) => {
    const { fetchBasket, fetchAllDevices, fetchAllTypes,
        fetchAllBrands, fetchUser, fetchAllFavoriteDevices,
        fetchShippingInfo, fetchUserOrders } = useActions();
    const isAuth = useAppSelector(userSelector.isAuth);

    useEffect(() => {
        fetchAllDevices();
        fetchAllTypes();
        fetchAllBrands();
    }, []);

    useEffect(() => {
        if (getToken('token') && !isAuth) {
            fetchUser();
        }
    }, [isAuth]);

    useEffect(() => {
        if (isAuth) {
            fetchAllFavoriteDevices();
            fetchShippingInfo();
            fetchBasket();
            fetchUserOrders();
        }
    }, [isAuth]);

    return children;
};
