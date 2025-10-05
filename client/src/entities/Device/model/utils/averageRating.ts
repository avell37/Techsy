import { IReview } from "@/shared/types";

export const averageRating = (reviews: IReview[]) => {
    const avgRating =
    reviews && reviews.length > 0
        ? (
            reviews.reduce((acc, review) => acc + (review.rate || 0), 0) /
            reviews.length
        ).toFixed(1)
        : "0.0";
    
    return avgRating;
};