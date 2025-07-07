import {
    deviceReducer, userReducer, brandReducer,
    typeReducer, reviewReducer, basketReducer,
    shippingReducer,
    orderStatusReducer,
} from "@/entities"
import { ordersReducer } from "@/entities/Order/model/slice/ordersSlice"
import { favoriteReducer } from "@/entities/Favorites"
import { sortReducer } from "@/features/FilteredSearch/model/slice/sortSlice"

export const rootReducers = {
    deviceReducer,
    userReducer,
    brandReducer,
    typeReducer,
    favoriteReducer,
    reviewReducer,
    basketReducer,
    shippingReducer,
    sortReducer,
    ordersReducer,
    orderStatusReducer
}