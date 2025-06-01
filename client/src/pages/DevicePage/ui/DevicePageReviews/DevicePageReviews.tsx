import { Button, ReviewCard } from "@/shared/ui";
import { Modal } from "@/features/ManageModal";
import { DevicePageReviewsSchema } from "../../model/types/DevicePageSchema";

export const DevicePageReviews = ({
    openModal,
    isOpen,
    closeModal,
    contentType,
    reviews,
    currentUser,
    handleDeleteReview,
}: DevicePageReviewsSchema) => {
    return (
        <div className="flex flex-col pl-20 gap-[30px] pb-6">
            <Button
                onClick={() => openModal("addReview")}
                className="w-[200px] h-[40px] text-center text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition"
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
