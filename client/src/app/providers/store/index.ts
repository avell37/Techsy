import { 
    deviceReducer, userReducer, brandReducer, 
    typeReducer, reviewReducer, basketReducer, shippingReducer } from "@/entities"
import { favoriteReducer } from "@/features/Favorites"
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
    sortReducer
}