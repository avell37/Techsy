import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "../useAppDispatch/useAppDispatch";
import {
    basketActions,
    brandActions,
    shippingActions,
    typeActions,
    userActions,
    fetchBasket,
    fetchAllBrands,
    fetchAllDevices,
    fetchDeviceById,
    fetchDeviceReviews,
    fetchShippingInfo,
    fetchAllTypes,
    getUser,
    getData,
} from "@/entities";
import { sortActions } from "@/features/FilteredSearch";
import { fetchOrderStatus, fetchUserOrders } from "@/features/Order";

export const useActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(
        {
            ...basketActions,
            ...brandActions,
            ...shippingActions,
            ...typeActions,
            ...userActions,
            ...sortActions,
            fetchOrderStatus,
            fetchUserOrders,
            fetchBasket,
            fetchAllBrands,
            fetchAllDevices,
            fetchDeviceById,
            fetchDeviceReviews,
            fetchShippingInfo,
            fetchAllTypes,
            getUser,
            getData,
        },
        dispatch
    );
};
