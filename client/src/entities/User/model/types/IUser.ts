import type { IDevice } from "@/entities/Device";
import type { IReview } from "@/entities/Review";

export interface IUser {
    id?: string,
    username: string,
    email: string,
    role: string,
    picture?: string,
    favorites: IDevice[],
    reviews: IReview[],
}