import type { IBasketItem } from "@/entities/Basket";

export interface CartDeviceSchema {
    device: IBasketItem,
    isFavorite: boolean,
    onClick: () => void,
}