import type { IReview } from "./IReview";

export interface ReviewInitialState {
    reviews: IReview[];
    loading: boolean;
    error: boolean;
}