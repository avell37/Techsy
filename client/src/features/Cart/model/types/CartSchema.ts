import { BasketItem } from "@/shared/types";

export interface CartDeviceSchema {
    device: BasketItem,
    isFavorite: boolean,
    onClick: () => void,
}

export interface CartSchema {
    setSelectedPayment: (paymentMethod: string) => void,
    totalPrice: number,
    handleCreateOrder: () => void,
}