import { IShipping } from "@/shared/types";

export interface ShippingInitialState {
    shipping: IShipping,
    loading: boolean,
    error: boolean
}