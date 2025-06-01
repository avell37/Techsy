import { IShipping } from "@/shared/types/IShipping";

export interface ShippingStateSchema {
    shipping: IShipping,
    loading: boolean,
    error: boolean
}