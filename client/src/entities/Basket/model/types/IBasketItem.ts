import type { IDevice } from "@/entities/Device";

export interface IBasketItem {
    basketId: string,
    createdAt: string,
    deviceId: string,
    id: string,
    quantity: number,
    updatedAt: string,
    device: IDevice
}