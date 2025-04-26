import { deviceReducer } from "@/entities/Device";
import { userReducer } from "@/entities/User";
import { brandReducer } from "@/entities/Brand";
import { typeReducer } from "@/entities/Type/model/typeSlice";

export const rootReducers = {
    deviceReducer,
    userReducer,
    brandReducer,
    typeReducer
}