import { Button, ReviewCard } from "@/shared/ui";
import { Modal } from "@/features/ManageModal";
import { DevicePageReviewsSchema } from "../../model/types/DevicePageSchema";

export const DevicePageReviews = ({
    isOpen,
    closeModal,
    contentType,
    reviews,
    currentUser,
    handleAddReview,
    handleDeleteReview,
}: DevicePageReviewsSchema) => {
    return (
        <div className="flex flex-col pl-20 gap-[30px] pb-6">
            <Button
                onClick={() => handleAddReview()}
                className="rounded-md w-[200px] h-[40px] text-center border border-[#3A177F] text-white hover:border-[#8A4FFF] hover:bg-[#1A1238]/50 transition-all cursor-pointer"
                text="Хотите оставить отзыв?"
            />
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                contentType={contentType}
            />
            <h1 className="text-white text-2xl font-bold">Отзывы:</h1>
            {reviews && reviews.length > 0 ? (
                reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        currentUser={currentUser}
                        review={review}
                        handleDeleteReview={() => handleDeleteReview(review.id)}
                    />
                ))
            ) : (
                <div className="text-white">Отзывов пока что нет...</div>
            )}
        </div>
    );
};
