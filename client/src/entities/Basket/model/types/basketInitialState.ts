import type { IBasketItem } from "./IBasketItem";

export interface BasketInitialState {
    basket: IBasketItem[],
    loading: boolean,
    error: boolean
}