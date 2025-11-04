import { useNotification } from "@/shared/hooks";
import type { IDropdownItem } from "@/shared/ui/custom";
import type { IReview } from "@/entities/Review/model/types/IReview";
import { deleteReview, fetchAllReviews } from "@/entities";

export const useReviewActions = (review: IReview): IDropdownItem[] => {
    const { notifySuccess, notifyError } = useNotification();

    const handleDelete = async () => {
        try {
            await deleteReview(review.id);
            fetchAllReviews();
            notifySuccess("Товар удален.")
        } catch (err) {
            notifyError("Ошибка при удалении.")
        }
    }

    return [
        {
            text: "Удалить",
            onClick: handleDelete
        }
    ]
}