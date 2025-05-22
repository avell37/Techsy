import { deviceReducer } from "@/entities/Device";
import { userReducer } from "@/entities/User";
import { brandReducer } from "@/entities/Brand";
import { typeReducer } from "@/entities/Type";
import { favoriteReducer } from "@/features/Favorites/model/slice/favoriteSlice";
import { reviewReducer } from "@/entities/Review";

export const rootReducers = {
    deviceReducer,
    userReducer,
    brandReducer,
    typeReducer,
    favoriteReducer,
    reviewReducer
}