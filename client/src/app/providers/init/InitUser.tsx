import { useActions, useAppSelector } from "@/shared/hooks";
import { getToken } from "@/shared/lib";
import { FC, useEffect } from "react";
import { userSelector } from "@/entities";

interface InitProps {
    children: React.ReactNode;
}

export const InitUser: FC<InitProps> = ({ children }) => {
    const { fetchBasket, fetchAllDevices, fetchAllTypes,
        fetchAllBrands, getUser, getData,
        fetchShippingInfo, fetchUserOrders } = useActions();
    const isAuth = useAppSelector(userSelector.isAuth);

    useEffect(() => {
        fetchAllDevices();
        fetchAllTypes();
        fetchAllBrands();
    }, []);

    useEffect(() => {
        if (getToken('token') && !isAuth) {
            getUser();
            getData();
        }
    }, [isAuth]);

    useEffect(() => {
        if (isAuth) {
            fetchShippingInfo();
            fetchBasket();
            fetchUserOrders();
        }
    }, [isAuth]);

    return children;
};
