import { useActions, useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { ReviewYupSchema } from "../lib/ReviewYupSchema";
import { createReview } from "@/entities";
import { handleServerFormError } from "@/shared/lib";
import { ReviewHookData } from "../types/ReviewHookData";

export const useReviewForm = (onClose?: () => void) => {
    const { id } = useParams();
    const { fetchDeviceReviews } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const { control, handleSubmit, reset, setError,
        getValues, formState: { errors }
    } = useForm({
        resolver: yupResolver(ReviewYupSchema),
        defaultValues: {
            review: '',
            rating: 0,
        }
    });
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
        control,
        errors,
        reviewRating,
        handleAddReview: handleSubmit(handleAddReview)
    }
}