import { IDevice } from "./IDevice";
import { IUser } from "./IUser";

export interface IReview {
    id: string,
    deviceId: string,
    userId: string,
    updatedAt: string,
    createdAt: string,
    rate?: number,
    comment?: string,
    User?: IUser,
    Device?: IDevice,
}