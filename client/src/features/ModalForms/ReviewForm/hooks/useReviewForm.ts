import { useAppDispatch, useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { ReviewYupSchema } from "../lib/ReviewYupSchema";
import { createReview, fetchDeviceReviews } from "@/entities";
import { AxiosError } from "axios";

export const useReviewForm = (onClose?: () => void) => {
    const { id } = useParams();
    const { notifySuccess, notifyError } = useNotification();
    const dispatch = useAppDispatch();

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
                reset();
                if (onClose) onClose();
                dispatch(fetchDeviceReviews(id));
                notifySuccess("Отзыв успешно добавлен");
            }
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            const message = error.response?.data?.message || "Ошибка. Пожалуйста, попробуйте еще раз.";
            if (message.includes("Данный тип уже существует.")) {
                setError("review", {
                    type: "server",
                    message,
                })
            } else {
                notifyError("Ошибка... Попробуй еще раз :)");
            }
        }
    };

    return {
        control,
        handleSubmit,
        errors,
        handleAddReview,
        reviewRating
    }
}