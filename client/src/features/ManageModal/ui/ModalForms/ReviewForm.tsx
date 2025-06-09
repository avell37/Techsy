import { Button, Input } from "@/shared/ui";
import { FormSchema } from "../../model/types/ModalSchema";
import { StarRating } from "@/features/StarRating/ui/StarRating";
import { useState } from "react";
import { useNotification, useAppDispatch } from "@/shared/hooks";
import { useParams } from "react-router-dom";
import { createReview } from "@/shared/api/deviceApi";
import { fetchDeviceReviews } from "@/entities";

export const ReviewForm = ({ onClose }: FormSchema) => {
    const { id } = useParams();
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const { notifySuccess, notifyWarn, notifyError } = useNotification();
    const dispatch = useAppDispatch();

    const handleAddReview = async (e: React.FormEvent) => {
        e.preventDefault();
        if (review.length < 3) {
            return notifyWarn("Отзыв должен содержать минимум 3 символа");
        }
        if (rating === 0) {
            return notifyWarn("Поставьте оценку товару");
        }
        try {
            if (id) {
                await createReview(id, rating, review);
                notifySuccess("Отзыв успешно добавлен");
                setReview("");
                setRating(0);
                onClose();
                dispatch(fetchDeviceReviews(id));
            }
        } catch (err) {
            console.log(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    return (
        <form
            onSubmit={handleAddReview}
            className="flex flex-col gap-[30px] p-4"
        >
            <h1 className="text-white pt-4 text-xl font-bold">Ваш отзыв:</h1>
            <StarRating value={rating} onChange={setRating} />
            <Input
                noWrap
                className="max-w-[450px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-4 focus:border-[#4F45E4] outline-none"
                placeholder="Введите текст отзыва"
                onChange={(e) => setReview(e.target.value)}
            />
            <div className="flex justify-end mb-6 mr-2 gap-[10px]">
                <Button
                    className="rounded-md max-w-[100px] w-full h-[40px] bg-[#5120B8] font-bold focus:outline-none cursor-pointer text-white"
                    type="submit"
                    text="Добавить"
                />
                <Button
                    className="rounded-md max-w-[100px] w-full h-[40px] bg-red-900 font-bold focus:outline-none cursor-pointer text-white"
                    onClick={onClose}
                    text="Закрыть"
                />
            </div>
        </form>
    );
};
