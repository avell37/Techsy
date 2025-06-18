import { Button, FormattedDate } from "@/shared/ui";
import { XMarkIcon } from "@/shared/assets";
import { StarRating } from "@/features/StarRating/ui/StarRating";
import { ReviewCardProps } from "../model/ReviewCardProps";

export const ReviewCard = ({
    review,
    currentUser,
    handleDeleteReview,
}: ReviewCardProps) => {
    const isOwner = currentUser?.id === review?.User?.id;
    const isAdmin = currentUser?.role === "Admin";

    if (!review?.User) {
        return null;
    }
    return (
        <div className="relative border-1 border-[#5120B8]/30 rounded-xl  w-full">
            <div className="flex flex-col p-6 gap-[10px]">
                <div className="flex gap-[20px]">
                    <img
                        src={
                            review.User.picture?.startsWith("http")
                                ? review.User.picture
                                : `${import.meta.env.VITE_API_URL}/avatars/${review.User.picture
                                }`
                        }
                        className="max-w-[60px] max-h-[60px] border-2 border-[#3A177F] rounded-full"
                    />
                    <p className="text-white font-bold mt-2">
                        {review.User.username}
                    </p>
                </div>
                <div className="flex items-center gap-[10px] border border-[#5120B8]/30 max-w-[160px] rounded-lg p-2 bg-gradient-to-br from-[#1A1238]/50 to-[#08080e] backdrop-blur-sm">
                    <span className="text-white text-sm">Оценка:</span>
                    <StarRating value={Number(review.rate)} readOnly size={16} />
                </div>
                <div className="mb-8">
                    <p className="text-white text-sm">{review.comment}</p>
                </div>
                <div className="flex flex-col justify-end items-end gap-[10px] text-white text-sm">
                    {(isOwner || isAdmin) && (
                        <Button onClick={() => handleDeleteReview(review.id)}>
                            <XMarkIcon
                                width="15px"
                                height="15px"
                                className="stroke-[#fff] absolute right-4 top-4 cursor-pointer"
                            />
                        </Button>
                    )}
                    <FormattedDate
                        className="absolute bottom-4 right-3"
                        date={review.createdAt}
                    />
                </div>
            </div>
        </div>
    );
};