import { Button, Input } from "@/shared/ui";
import { StarRating } from "@/features/StarRating/ui/StarRating";
import { useReviewForm } from "../hooks/useReviewForm";
import { Controller } from "react-hook-form";

export const ReviewForm = ({ onClose }: { onClose: () => void }) => {
    const { control, handleSubmit, handleAddReview, errors } = useReviewForm(onClose);

    return (
        <form
            onSubmit={handleSubmit(handleAddReview)}
            className="flex flex-col gap-[30px] p-4"
        >
            <h1 className="text-white pt-4 text-xl font-bold">Ваш отзыв:</h1>
            <Controller
                name="rating"
                control={control}
                render={({ field, fieldState }) =>
                    <StarRating
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error} />} />
            <Controller
                name='review'
                control={control}
                render={({ field }) =>
                    <Input
                        {...field}
                        noWrap
                        className="max-w-[450px] custom-input p-3"
                        placeholder="Введите текст отзыва"
                        error={errors?.review?.message}
                    />} />
            <div className="flex justify-end mb-6 mr-2 gap-[10px]">
                <Button
                    className="apply-button"
                    type="submit"
                    text="Добавить"
                />
                <Button
                    className="cancel-button"
                    onClick={onClose}
                    text="Закрыть"
                />
            </div>
        </form>
    );
};

