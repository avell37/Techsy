import { fetchUser } from "@/entities/User";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import Cookies from "js-cookie";
import { useEffect } from "react";
import {
    fetchAllDevices,
    fetchAllTypes,
    fetchAllBrands,
    fetchShippingInfo,
    fetchBasket,
    fetchUserOrders,
} from "@/entities";
import { fetchAllFavoriteDevices } from "@/entities/Favorites";

interface initProps {
    children: React.ReactNode;
}

export const InitUser = ({ children }: initProps) => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector((state) => state.userReducer.isAuth);

    useEffect(() => {
        dispatch(fetchAllDevices());
        dispatch(fetchAllTypes());
        dispatch(fetchAllBrands());
    }, [dispatch]);

    useEffect(() => {
        const token = Cookies.get("token");
        if (token && !isAuth) {
            dispatch(fetchUser());
        }
    }, [dispatch, isAuth]);

    useEffect(() => {
        if (isAuth) {
            dispatch(fetchAllFavoriteDevices());
            dispatch(fetchShippingInfo());
            dispatch(fetchBasket());
            dispatch(fetchUserOrders());
        }
    }, [dispatch, isAuth]);

    return <>{children}</>;
};
