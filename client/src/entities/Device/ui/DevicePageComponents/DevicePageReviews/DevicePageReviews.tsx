import { Button, RatingBars } from "@/shared/ui";
import { DevicePageReviewsSchema } from "../../../model/types/DevicePageSchema";
import { ReviewCard } from "@/entities/Review/ui/ReviewCard/ui/ReviewCard";
import { StarRating } from "@/features/StarRating/ui/StarRating";
import { DialogModal } from "@/shared/ui/DialogModal/DialogModal";
import { ReviewAddForm } from "@/entities/Review/ui/ReviewCard/ui/ReviewAddForm";
import { useReview } from "@/entities/Review/model/hooks/useReview";

export const DevicePageReviews = ({
    currentUser,
}: DevicePageReviewsSchema) => {
    const { reviews, avgRating, counts, handleCheckAuth, handleDeleteReview } = useReview();

    const handleDelete = (id: string) => {
        handleDeleteReview(id)
    }

    return (
        <div className="flex h-full max-sm:flex-col">
            <div className="flex flex-col items-center min-h-fit md:max-w-[300px] w-full p-8 border-r border-primary-900/30 max-sm:border-r-0 max-sm:border-b">
                <div className="flex flex-col items-center gap-4 mb-8">
                    <span className="text-white text-5xl font-bold">
                        {avgRating}
                    </span>
                    <StarRating value={Number(avgRating)} readOnly size={24} />
                    <span className="text-white text-sm">
                        На основе {reviews.length} {reviews.length === 1 ? "отзыва" : "отзывов"}
                    </span>
                </div>
                <div className="w-full space-y-4">
                    <RatingBars counts={counts} total={reviews.length} />
                </div>
            </div>
            <div className="w-full flex flex-col gap-[30px] p-8">
                <div className="flex justify-between gap-2 max-w-[400px]:flex-col">
                    <h1 className="text-white text-2xl font-bold max-md:text-xl max-sm:text-sm">
                        Все отзывы ({reviews.length})
                    </h1>
                    <DialogModal
                        title="Оцените товар"
                        description="Поставьте оценку в виде звезд от 1 до 5 и напишите отзыв."
                        trigger={
                            <Button
                                type="button"
                                variant="default"
                                size="none"
                                onClick={handleCheckAuth}
                                className="w-[200px] h-[50px] apply-button"
                            >
                                Добавить отзыв
                            </Button>
                        }
                        children={
                            <ReviewAddForm />
                        }
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
                    <div className="text-gray-500 text-2xl my-20 text-center">
                        Отзывов пока что нет...
                    </div>
                )}
            </div>
        </div>
    );
};
