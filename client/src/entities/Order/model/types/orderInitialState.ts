import { IOrder } from "@/shared/types/IOrder";

export interface OrderInitialState {
    orders: IOrder[],
    loading: boolean,
    error: boolean
}