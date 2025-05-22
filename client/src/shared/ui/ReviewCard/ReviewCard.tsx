import { Button } from "../Button/ui/Button";
import { FormattedDate } from "../FormattedDate/FormattedDate";
import { StarIcon, XMarkIcon } from "@/shared/assets";

export const ReviewCard = ({ review, currentUser, handleDeleteReview }) => {
    const isOwner = currentUser?.id === review?.User?.id;
    const isAdmin = currentUser?.role === "Admin";

    return (
        <div className="relative border-1 border-[#5120B8]/30 rounded-xl max-w-[1000px] w-full">
            <div className="flex p-6 gap-[10px]">
                <img
                    src={
                        review.User.picture.startsWith("http")
                            ? review.User.picture
                            : import.meta.env.VITE_API_URL +
                              "/avatars/" +
                              review.User.picture
                    }
                    className="max-w-[70px] max-h-[70px] border-2 border-[#3A177F] rounded-full"
                />
                <div className="flex flex-col justify-end items-end gap-[10px] text-white text-sm">
                    {(isOwner || isAdmin) && (
                        <Button onClick={handleDeleteReview}>
                            <XMarkIcon
                                width="15px"
                                height="15px"
                                className="stroke-[#fff] absolute right-4 top-4"
                            />
                        </Button>
                    )}
                    <FormattedDate
                        className="absolute bottom-4 right-3"
                        date={review.createdAt}
                    />
                </div>
                <div className="flex flex-col max-w-[600px]">
                    <p className="text-white font-bold">
                        {review?.User?.username}
                    </p>
                    <div className="flex items-center gap-[8px]">
                        <div className="flex items-center">
                            <StarIcon
                                width="15px"
                                height="15px"
                                className="fill-[#ffe500]"
                            />
                            <span className="text-white text-lg ml-[4px]">
                                {review?.rate}
                            </span>
                        </div>
                    </div>
                    <p className="text-white">{review?.comment}</p>
                </div>
            </div>
        </div>
    );
};
