import { IReview } from "@/shared/types";

export const starCounts = (reviews: IReview[]) => {
    const counts = reviews.reduce((acc, review) => {
        if (review.rate) {
            acc[review.rate] = (acc[review.rate] || 0) + 1;
        }
        return acc;
    }, {} as Record<number, number>);

    return {
        counts: {
            1: counts[1] || 0,
            2: counts[2] || 0,
            3: counts[3] || 0,
            4: counts[4] || 0,
            5: counts[5] || 0,
        }
    }
}