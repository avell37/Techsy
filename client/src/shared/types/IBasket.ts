import { BasketItem } from "./IBasketItem";

export interface IBasket {
    id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    BasketDevice: BasketItem[];
}