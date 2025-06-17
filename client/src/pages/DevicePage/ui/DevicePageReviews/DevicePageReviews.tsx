import { Button } from "@/shared/ui";
import { DevicePageReviewsSchema } from "../../model/types/DevicePageSchema";
import { ReviewCard } from "@/entities/Review/ui/ReviewCard/ui/ReviewCard";
import { StarRating } from "@/features/StarRating/ui/StarRating";
import { starCounts } from "../../lib/starCounts";
import { averageRating } from "../../lib/averageRating";
import { StarCountType } from "../../model/types/starCountSchema";
import { RatingBars } from "./lib/RatingBars";

export const DevicePageReviews = ({
    reviews,
    currentUser,
    handleAddReview,
    handleDeleteReview,
}: DevicePageReviewsSchema) => {
    const stats = starCounts(reviews || []);
    const avgRating = averageRating(reviews || []);
    const counts: StarCountType = stats.counts;

    return (
        <div className="flex h-full">
            <div className="border-r border-[#5120B8]/30 min-h-fit min-w-[300px] flex flex-col items-center p-8">
                <div className="flex flex-col items-center gap-4 mb-8">
                    <span className="text-[#8A4FFF] text-5xl font-bold">
                        {avgRating}
                    </span>
                    <StarRating value={Number(avgRating)} readOnly size={24} />
                    <span className="text-[#8A4FFF]/70 text-sm">
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
                        onClick={() => handleAddReview()}
                        className="rounded-md w-[200px] h-[50px] text-center border border-[#3A177F] text-white hover:border-[#8A4FFF] hover:bg-[#1A1238]/50 transition-all cursor-pointer"
                        text="Добавить отзыв"
                    />
                </div>
                {reviews && reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            currentUser={currentUser}
                            review={review}
                            handleDeleteReview={() =>
                                handleDeleteReview(review.id)
                            }
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
