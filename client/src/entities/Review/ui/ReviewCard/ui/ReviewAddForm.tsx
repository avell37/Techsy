import { useReviewForm } from "@/entities/Review/model/hooks/useReviewForm";
import { StarRating } from "@/features/StarRating";
import { Button, DialogClose, Form, FormInputController, Label } from "@/shared/ui"
import { Controller } from "react-hook-form";

export const ReviewAddForm = () => {
    const { form, handleAddReview } = useReviewForm()
    
    return (
        <Form {...form}>
            <form 
                className="flex flex-col gap-8"
                onSubmit={handleAddReview}
            >
                <div className="flex flex-col gap-2">
                    <Label className="text-gray-400">Оценка:</Label>
                    <Controller 
                        control={form.control}
                        name="rating"
                        render={({ field }) => (
                            <StarRating 
                                value={field.value} 
                                onChange={field.onChange} 
                                size={30} 
                            />
                        )}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <Label className="text-gray-400">Имя пользователя</Label>
                    <FormInputController 
                        name="review"
                        placeholder="Введите ваш отзыв"
                        control={form.control}
                        className="custom-input"
                    />
                </div>
                <div className="flex justify-end gap-2">
                    <Button
                        variant="ghost"
                        type="submit"
                        className="apply-button"
                    >
                        Добавить
                    </Button>
                    <DialogClose asChild>
                        <Button
                            type="button"
                            variant="ghost"
                            className="cancel-button"
                        >
                            Закрыть
                        </Button>
                    </DialogClose>
                </div>
            </form>
        </Form>
    )
}