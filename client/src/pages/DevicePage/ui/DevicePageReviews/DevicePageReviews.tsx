import { Button, RatingBars } from "@/shared/ui";
import { DevicePageReviewsSchema } from "../../model/types/DevicePageSchema";
import { ReviewCard } from "@/entities/Review/ui/ReviewCard/ui/ReviewCard";
import { StarRating } from "@/features/StarRating/ui/StarRating";
import { starCounts } from "../../lib/starCounts";
import { averageRating } from "../../lib/averageRating";
import { useMemo } from "react";

export const DevicePageReviews = ({
    reviews,
    currentUser,
    handleAddReview,
    handleDeleteReview,
}: DevicePageReviewsSchema) => {
    const { avgRating, counts } = useMemo(() => {
        const safeReviews = reviews || [];
        const stats = starCounts(safeReviews);
        const avg = averageRating(safeReviews);
        return {
            avgRating: avg,
            counts: stats.counts
        }
    }, [reviews]);

    const handleDelete = (id: string) => {
        handleDeleteReview(id)
    }

    return (
        <div className="flex h-full">
            <div className="flex flex-col items-center min-h-fit min-w-[300px] p-8 border-r border-primary-900/30">
                <div className="flex flex-col items-center gap-4 mb-8">
                    <span className="text-light-purple text-5xl font-bold">
                        {avgRating}
                    </span>
                    <StarRating value={Number(avgRating)} readOnly size={24} />
                    <span className="text-light-purple/70 text-sm">
                        На основе {reviews.length}{" "}
                        {reviews.length === 1 ? "отзыва" : "отзывов"}
                    </span>
                </div>
                <div className="w-full space-y-4">
                    <RatingBars counts={counts} total={reviews.length} />
                </div>
            </div>
            <div className="w-full flex flex-col gap-[30px] p-8">
                <div className="flex justify-between">
                    <h1 className="text-white text-2xl font-bold">
                        Все отзывы{" "}
                        <span className="text-white">({reviews.length})</span>
                    </h1>
                    <Button
                        onClick={handleAddReview}
                        className="rounded-md w-[200px] h-[50px] text-center border border-indigo-900 text-white 
                        hover:border-light-purple hover:bg-primary-300/50 transition-all cursor-pointer"
                        text="Добавить отзыв"
                    />
                </div>
                {reviews && !!reviews.length ? (
                    reviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            currentUser={currentUser}
                            review={review}
                            handleDeleteReview={() => handleDelete(review.id)}
                        />
                    ))
                ) : (
                    <div className="text-gray-500 text-2xl mt-20 text-center">
                        Отзывов пока что нет...
                    </div>
                )}
            </div>
        </div>
    );
};
