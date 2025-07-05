import { Button, FormattedDate } from "@/shared/ui";
import { defaultUser, XMarkIcon } from "@/shared/assets";
import { StarRating } from "@/features/StarRating/ui/StarRating";
import { ReviewCardProps } from "../model/ReviewCardProps";
import { useMemo } from "react";

export const ReviewCard = ({
    review,
    currentUser,
    handleDeleteReview,
}: ReviewCardProps) => {
    const isOwner = useMemo(() => currentUser?.id === review?.User?.id, [currentUser, review]);
    const isAdmin = useMemo(() => currentUser?.role === "Admin", [currentUser])

    const profileImage = review?.User?.picture
        ? `${import.meta.env.VITE_API_URL}/uploads/avatars/${review.User.picture}`
        : defaultUser;

    const handleDelete = () => handleDeleteReview(review.id);

    if (!review?.User) {
        return null;
    }

    return (
        <div className="relative border-1 border-primary-900/30 rounded-xl  w-full">
            <div className="flex flex-col p-6 gap-[10px]">
                <div className="flex gap-[20px]">
                    <img
                        src={profileImage}
                        className="max-w-[60px] max-h-[60px] border-2 border-indigo-900 rounded-full"
                    />
                    <p className="text-white font-bold mt-2">
                        {review.User.username}
                    </p>
                </div>
                <div className="flex items-center gap-[10px] border border-primary-900/30 max-w-[160px] rounded-lg p-2 card-inner-gradient">
                    <span className="text-white text-sm max-sm:text-xs">Оценка:</span>
                    <StarRating value={Number(review.rate)} readOnly size={16} />
                </div>
                <div className="mb-8">
                    <p className="text-white text-sm">{review.comment}</p>
                </div>
                <div className="flex flex-col justify-end items-end gap-[10px] text-white text-sm">
                    {(isOwner || isAdmin) && (
                        <Button onClick={handleDelete}>
                            <XMarkIcon
                                className="stroke-white absolute right-4 top-4 cursor-pointer hover:stroke-gray-400 transition-all
                                duration-300 max-w-[25px] w-full max-h-[25px] h-full max-sm:max-w-[17px] max-sm:max-h-[17px]"
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