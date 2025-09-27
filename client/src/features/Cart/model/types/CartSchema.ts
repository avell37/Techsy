import { BasketItem } from "@/shared/types";

export interface CartDeviceSchema {
    device: BasketItem,
    isFavorite: boolean,
    onClick: () => void,
}