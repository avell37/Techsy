import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "../useAppDispatch/useAppDispatch"
import {
    basketActions, brandActions, favoriteActions,
    shippingActions, typeActions, userActions, fetchOrderStatus,
    fetchUserOrders, fetchBasket, fetchAllBrands,
    fetchAllDevices, fetchDeviceById, fetchAllFavoriteDevices,
    fetchDeviceReviews, fetchShippingInfo, fetchAllTypes, fetchUser
} from "@/entities";
import { sortActions } from "@/features/FilteredSearch";

export const useActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(
        {
            ...basketActions,
            ...brandActions,
            ...favoriteActions,
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
            fetchAllFavoriteDevices,
            fetchDeviceReviews,
            fetchShippingInfo,
            fetchAllTypes,
            fetchUser
        }, dispatch)
}