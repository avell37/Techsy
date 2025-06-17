import { IDevice } from "./IDevice";

export interface BasketItem {
    basketId: string,
    createdAt: string,
    deviceId: string,
    id: string,
    quantity: number,
    updatedAt: string,
    device: IDevice
}