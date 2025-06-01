import { IDevice } from "@/shared/types";

export interface BasketItemSchema {
    basketId: string,
    createdAt: string,
    deviceId: string,
    id: string,
    quantity: number,
    updatedAt: string,
    device: IDevice
}

export interface BasketStateSchema {
    basket: BasketItemSchema[],
    loading: boolean,
    error: boolean
}