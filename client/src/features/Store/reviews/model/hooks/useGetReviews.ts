import { fetchAllReviews, type IReview } from "@/entities/Review";
import { useNotification } from "@/shared/hooks";
import { useEffect, useState } from "react";

export const useGetReviews = () => {
    const [reviews, setReviews] = useState<IReview[]>();
    const { notifyError } = useNotification();

    const getReviews = async () => {
        try {
            const data = await fetchAllReviews();
            setReviews(data);
        } catch (err) {
            console.error(err);
            notifyError("Не удалось загрузить отзывы");
        }
    };

    useEffect(() => {
        getReviews();
    }, []);

    return { reviews };
};
