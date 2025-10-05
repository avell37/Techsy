import { useActions, useAppSelector, useNotification } from "@/shared/hooks";
import { getToken } from "@/shared/lib";
import { useParams } from "react-router-dom";
import { deleteReview } from "../../api/reviewApi";
import { useEffect, useMemo } from "react";
import { reviewSelector } from "../selectors/reviewSelector";
import { starCounts } from "@/entities/Device/model/utils/starCounts";
import { averageRating } from "@/entities/Device/model/utils/averageRating";

export const useReview = () => {
    const { id } = useParams();
    const reviews = useAppSelector(reviewSelector.reviews);
    const { notifySuccess, notifyError } = useNotification();
    const { fetchDeviceReviews } = useActions();

    useEffect(() => {
        if (id) fetchDeviceReviews(id);
    }, [id]);
    
    const handleCheckAuth = () => {
        if (!getToken('token')) {
            notifyError("Чтобы оставить отзыв, необходимо авторизоваться");
            return;
        }
    };

    const handleDeleteReview = async (reviewId: string) => {
        try {
            await deleteReview(reviewId);
            if (id) fetchDeviceReviews(id);
            notifySuccess("Отзыв успешно удален");
        } catch (err) {
            console.log(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    const { avgRating, counts } = useMemo(() => {
        const safeReviews = reviews || [];
        const stats = starCounts(safeReviews);
        const avg = averageRating(safeReviews);
        return {
            avgRating: avg,
            counts: stats.counts
        }
    }, [reviews]);

    return {
        reviews,
        avgRating,
        counts,
        handleCheckAuth,
        handleDeleteReview
    }
}