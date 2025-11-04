import type { IOrder } from "./IOrder";

export interface OrderInitialState {
    orders: IOrder[],
    loading: boolean,
    error: boolean
}