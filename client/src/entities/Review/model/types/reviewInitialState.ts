import { IReview } from "@/shared/types";

export interface ReviewInitialState {
    reviews: IReview[];
    loading: boolean;
    error: boolean;
}