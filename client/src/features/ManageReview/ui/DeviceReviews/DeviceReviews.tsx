import { DeviceReviewCard } from "./DeviceReviewCard"
import { useReviews } from "../../model/hooks/useReviews";

export const DeviceReviews = () => {
    const { reviews, currentUser, getReviewCardProps } = useReviews();

    return (
        <>
            {reviews && !!reviews.length ? (
                reviews.map((review) => {
                    const cardProps = getReviewCardProps(review)
                    return (
                        <DeviceReviewCard
                            key={review.id}
                            review={review}
                            currentUser={currentUser}
                            {...cardProps}
                        />
                    )
                })
            ) : (
                <div className="text-gray-500 text-2xl my-20 text-center">
                    Отзывов пока что нет...
                </div>
            )}
        </>
    )
}
