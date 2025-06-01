import { IUser } from "@/shared/types";
import { IReview } from "@/shared/types/IReview";

export interface ReviewCardSchema {
    review: IReview,
    currentUser: IUser | null,
    handleDeleteReview: (reviewId: string) => void,
}