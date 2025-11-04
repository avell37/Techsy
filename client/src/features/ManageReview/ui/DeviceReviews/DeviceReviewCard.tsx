import { Avatar, AvatarFallback, AvatarImage, Button, FormattedDate } from "@/shared/ui";
import { Pencil, X } from "lucide-react";
import type { IReview } from "@/entities/Review";
import type { IUser } from "@/entities/User";
import { useReviewPermissions } from "../../model/hooks/useReviewPermissions";
import { ConfirmDialog, DialogModal, StarRating } from "@/shared/ui/custom";
import { ReviewEditForm } from "../forms/ReviewEditForm";
import { customAvatar } from "@/shared/lib";

interface ReviewCardProps {
    review: IReview,
    currentUser: IUser | null,
    confirmOpen: boolean;
    confirmAction: (() => void) | null;
    setConfirmOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleDeleteSubmit: (e: React.MouseEvent) => void;
}

export const DeviceReviewCard = ({
    review,
    currentUser,
    confirmOpen,
    confirmAction,
    setConfirmOpen,
    handleDeleteSubmit
}: ReviewCardProps) => {
    if (!review?.User) return null;

    const { canEdit, canDelete } = useReviewPermissions(review, currentUser);
    const { username, picture } = review.User

    return (
        <div className="relative border-1 border-primary-900/30 rounded-xl w-full">
            <div className="flex flex-col p-6 gap-[10px]">
                <div className="flex gap-[10px]">
                    <Avatar className="size-10">
                        {picture ? (
                            <AvatarImage 
                                src={`${import.meta.env.VITE_API_URL}/uploads/avatars/${picture}`} 
                                alt="user image" 
                            />
                        ) : (
                            <AvatarFallback className="text-white">{customAvatar(username)}</AvatarFallback>
                        )}
                    </Avatar>
                    <p className="text-white font-bold mt-2">
                        {username}
                    </p>
                </div>
                <div className="flex items-center gap-[10px] border border-primary-900/30 max-w-[160px] rounded-md p-2 card-inner-gradient">
                    <span className="text-white text-sm max-sm:text-xs">Оценка:</span>
                    <StarRating value={Number(review.rate)} readOnly size={16} />
                </div>
                <div className="flex flex-col gap-2 max-w-[600px]">
                    <span className="text-white font-bold max-sm:text-xs">Комментарий:</span>
                    <p className="text-white text-sm break-words">{review.comment}</p>
                </div>
                <div className="flex flex-col justify-end items-end gap-[10px] text-white text-sm">
                    {canEdit && (
                        <DialogModal
                            title="Оцените товар"
                            description="Поставьте оценку в виде звезд от 1 до 5 и напишите отзыв."
                            trigger={
                                <Button
                                    size="none"
                                    className="absolute right-10 top-4"
                                >
                                    <Pencil />
                                </Button>
                            }
                            children={
                                <ReviewEditForm 
                                    review={review} 
                                />
                            }
                        />
                    )}
                    {canDelete && (
                        <Button 
                            size="none"
                            className="absolute right-4 top-4"
                            onClick={handleDeleteSubmit}
                        >
                            <X />
                        </Button>
                    )}
                    <FormattedDate
                        className="absolute bottom-4 right-3"
                        date={review.createdAt}
                    />
                </div>
            </div>
            <ConfirmDialog
                open={confirmOpen}
                onOpenChange={setConfirmOpen}
                title="Удалить отзыв?"
                description="Это действие нельзя будет отменить. Отзыв будет удален навсегда."
                cancelText="Отмена"
                actionText="Удалить"
                onConfirm={() => {
                    if (confirmAction) confirmAction();
                    setConfirmOpen(false);
                }}
            />
        </div>
    );
};