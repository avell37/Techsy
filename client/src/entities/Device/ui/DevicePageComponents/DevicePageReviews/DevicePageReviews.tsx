import { DeviceReviews, ReviewAddForm, useReviews } from "@/features/ManageReview";
import { Button, RatingBars } from "@/shared/ui";
import { DialogModal, StarRating } from "@/shared/ui/custom";

export const DevicePageReviews = () => {
    const { 
        reviews, 
        currentUser, 
        avgRating, 
        counts, 
    } = useReviews();

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
                <div className="flex justify-between gap-2">
                    <h1 className="text-white text-2xl font-bold max-md:text-xl max-sm:text-sm">
                        Все отзывы ({reviews.length})
                    </h1>
                    {currentUser ? (
                        <DialogModal
                            title="Оцените товар"
                            description="Поставьте оценку в виде звезд от 1 до 5 и напишите отзыв."
                            trigger={
                                <Button
                                    type="button"
                                    variant="default"
                                    size="none"
                                    className="flex justify-center items-center border border-primary-900/30 
                                    hover:border-primary-900 max-w-[175px] w-full h-[50px] apply-button-without-bg"
                                >
                                    Добавить отзыв
                                </Button>
                            }
                            children={
                                <ReviewAddForm />
                            }
                        />
                    ) : null}
                </div>
                <DeviceReviews />
            </div>
        </div>
    );
};
