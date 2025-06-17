import { BasketItem } from "@/shared/types";

export interface BasketInitialState {
    basket: BasketItem[],
    loading: boolean,
    error: boolean
}