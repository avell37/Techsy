import { useActions, useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { createReview } from "@/entities";
import { handleServerFormError } from "@/shared/lib";
import { ReviewYupSchema } from "../libs/ReviewYupSchema";
import { ReviewHookData } from "../types/ReviewHookData";

export const useReviewForm = (onClose?: () => void) => {
    const { id } = useParams();
    const { fetchDeviceReviews } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const form = useForm<ReviewHookData>({
        resolver: yupResolver(ReviewYupSchema)
    });
    const { getValues, reset, setError, handleSubmit } = form;

    const reviewRating = getValues();

    const handleAddReview = async (data: { review: string, rating: number }) => {
        try {
            if (id) {
                await createReview(id, data.rating, data.review);
                fetchDeviceReviews(id);
                reset();
                if (onClose) onClose();
                notifySuccess("Отзыв успешно добавлен");
            }
        } catch (err) {
            handleServerFormError<ReviewHookData>(
                err,
                setError,
                {
                    review: "review"
                },
                notifyError
            )
        }
    };

    return {
        form,
        reviewRating,
        handleAddReview: handleSubmit(handleAddReview)
    }
}