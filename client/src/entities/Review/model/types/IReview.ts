import type { IDevice } from "@/entities/Device";
import type { IUser } from "@/entities/User";

export interface IReview {
    id: string,
    deviceId: string,
    userId: string,
    updatedAt: string,
    createdAt: string,
    rate: number,
    comment?: string,
    User?: IUser,
    Device?: IDevice,
}