import type { IShipping } from "./IShipping";

export interface ShippingInitialState {
    shipping: IShipping,
    loading: boolean,
    error: boolean
}