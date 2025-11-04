import {
    deviceReducer,
    userReducer,
    brandReducer,
    typeReducer,
    reviewReducer,
    basketReducer,
    shippingReducer,
} from "@/entities";
import { sortReducer } from "@/features/FilteredSearch";
import { ordersReducer, orderStatusReducer } from "@/features/Order";

export const rootReducers = {
    deviceReducer,
    userReducer,
    brandReducer,
    typeReducer,
    reviewReducer,
    basketReducer,
    shippingReducer,
    sortReducer,
    ordersReducer,
    orderStatusReducer,
};
