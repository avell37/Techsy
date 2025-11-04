import { useActions, useAppSelector, useNotification } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    averageRating,
    createReview,
    deleteReview,
    getData,
    type IReview,
    reviewSelector,
    starCounts,
    updateReview,
    userSelector,
} from "@/entities";
import { getToken, handleServerFormError } from "@/shared/lib";
import { useEffect, useMemo, useState } from "react";
import { ReviewYupSchema } from "../validation/ReviewYupSchema";
import type { ReviewHookData } from "../types/ReviewHookData";
import { DEVICE_ROUTE } from "@/shared/config/consts";

export const useReviews = (initReview?: IReview) => {
    const { id } = useParams();
    const currentUser = useAppSelector(userSelector.currentUser);
    const userReviews = currentUser?.reviews;
    const reviews = useAppSelector(reviewSelector.reviews);
    const navigate = useNavigate();
    const {
        fetchDeviceReviews,
        addUserReview,
        updateUserReview,
        removeUserReview,
    } = useActions();
    const { notifySuccess, notifyError } = useNotification();

    const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
    const [confirmAction, setConfirmAction] = useState<(() => void) | null>(
        null
    );

    useEffect(() => {
        if (id) fetchDeviceReviews(id);
    }, [id]);

    const form = useForm<ReviewHookData>({
        resolver: yupResolver(ReviewYupSchema),
        defaultValues: {
            rating: initReview?.rate || 0,
            review: initReview?.comment || "",
        },
    });
    const { getValues, reset, setError, handleSubmit } = form;
    const reviewRating = getValues();

    useEffect(() => {
        if (initReview) {
            form.reset({
                rating: initReview.rate,
                review: initReview.comment,
            });
        }
    }, [initReview, form]);

    const handleAddReview = async (data: {
        review: string;
        rating: number;
    }) => {
        if (!getToken("token")) {
            notifyError("Чтобы оставить отзыв, необходимо авторизоваться");
            return;
        }
        try {
            if (id) {
                const newRewiew = await createReview(
                    id,
                    data.rating,
                    data.review
                );
                addUserReview(newRewiew);
                fetchDeviceReviews(id);
                getData();
                reset();
                notifySuccess("Отзыв успешно добавлен");
            }
        } catch (err) {
            handleServerFormError<ReviewHookData>(
                err,
                setError,
                { review: "review" },
                notifyError
            );
        }
    };

    const handleUpdateReview = async (
        reviewId: string,
        data: { review: string; rating: number }
    ) => {
        try {
            const updated = await updateReview(
                reviewId,
                data.rating,
                data.review
            );
            updateUserReview(updated);
            if (id) await fetchDeviceReviews(id);
            getData();
            notifySuccess("Отзыв обновлен");
        } catch (err) {
            console.error(err);
            notifyError("Ошибка при обновлении");
        }
    };

    const handleDeleteReview = async (reviewId: string) => {
        try {
            await deleteReview(reviewId);
            removeUserReview(reviewId);
            if (id) await fetchDeviceReviews(id);
            getData();
            notifySuccess("Отзыв успешно удален");
        } catch (err) {
            console.error(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    const handleConfirmAction = (action: () => void) => {
        setConfirmAction(() => action);
        setConfirmOpen(true);
    };

    const { avgRating, counts } = useMemo(() => {
        const safeReviews = reviews || [];
        const stats = starCounts(safeReviews);
        const avg = averageRating(safeReviews);
        return {
            avgRating: avg,
            counts: stats.counts,
        };
    }, [reviews]);

    const getReviewCardProps = (review: IReview) => {
        const navigateToDevicePage = () =>
            navigate(`${DEVICE_ROUTE}/${review?.Device?.id}`);
        const handleDeleteSubmit = (e: React.MouseEvent) => {
            e.stopPropagation();
            handleConfirmAction(() => handleDeleteReview(review.id));
        };

        return {
            confirmOpen,
            setConfirmOpen,
            confirmAction,
            navigateToDevicePage,
            handleDeleteSubmit,
        };
    };

    return {
        reviews,
        userReviews,
        currentUser,
        avgRating,
        counts,
        form,
        reviewRating,
        confirmOpen,
        setConfirmOpen,
        confirmAction,
        setConfirmAction,
        handleAddReview: handleSubmit(handleAddReview),
        handleUpdateReview,
        handleDeleteReview,
        getReviewCardProps,
    };
};
