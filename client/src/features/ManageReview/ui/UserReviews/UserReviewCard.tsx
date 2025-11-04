import type { IReview, IUser } from "@/entities"
import { Button } from "@/shared/ui"
import { Pencil, SquareArrowOutUpRight, Star, X } from "lucide-react"
import { ConfirmDialog, DialogModal } from "@/shared/ui/custom"
import { ReviewEditForm } from "../forms/ReviewEditForm"
import { useReviewPermissions } from "../../model/hooks/useReviewPermissions"
import { useState } from "react"

interface UserReviewCardProps {
    review: IReview;
    currentUser: IUser | null;
    confirmOpen: boolean;
    confirmAction: (() => void) | null;
    setConfirmOpen: React.Dispatch<React.SetStateAction<boolean>>;
    navigateToDevicePage: () => void;
    handleDeleteSubmit: (e: React.MouseEvent) => void;
}

export const UserReviewCard = ({
    review, 
    currentUser,
    confirmOpen,
    confirmAction,
    setConfirmOpen,
    navigateToDevicePage,
    handleDeleteSubmit
}: UserReviewCardProps) => {
    if (!currentUser) return null;

    const { canEdit, canDelete } = useReviewPermissions(review, currentUser);
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(prev => !prev)

    return (
        <div 
            className="relative flex flex-col border rounded-md p-4 gap-4 cursor-pointer"
        >
            <div className="flex gap-4 max-sm:flex-col">
                <img 
                    src={`${import.meta.env.VITE_API_URL}/uploads/${review?.Device?.img}`}
                    alt={review?.Device?.name}
                    className="w-[80px] h-[80px] object-cover rounded-md"
                />
                <div className="flex flex-col gap-2 w-full max-w-[600px]">
                    <h3 className="text-white">{review?.Device?.name}</h3>
                    <div className="flex">
                        {[...Array(5)].map((item, i) => (
                            <Star 
                                key={i}
                                size={16}
                                className={i < review?.rate ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                            />
                        ))}
                    </div>
                    <span className="text-white/50 text-sm">
                        Дата создания отзыва: {new Date(review?.createdAt).toLocaleDateString()}
                    </span>
                    <div className="flex flex-col justify-end items-end gap-[10px] text-white text-sm">
                        {canEdit && (
                            <DialogModal
                                title="Оцените товар"
                                description="Поставьте оценку в виде звезд от 1 до 5 и напишите отзыв."
                                trigger={
                                    <Button
                                        size="none"
                                        className="absolute right-10 top-4 hover:text-white/70 cursor-pointer
                                        transition-all"
                                        onClick={(e) => e.stopPropagation()}
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
                                className="absolute right-4 top-4 hover:text-white/70 cursor-pointer
                                transition-all"
                                onClick={handleDeleteSubmit}
                            >
                                <X />
                            </Button>
                        )}
                        <Button
                            variant="default"
                            size="none"
                            className="absolute top-4 right-16 text-white cursor-pointer 
                            hover:text-white/70 transition-all"
                            onClick={navigateToDevicePage}
                        >
                            <SquareArrowOutUpRight /> 
                        </Button>
                    </div>
                </div>
            </div>
            <div 
                className="text-white/70 text-sm"
                onClick={toggleOpen}
            >
                Кликните, чтобы увидеть ваш отзыв
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 max-w-[700px] 
                ${isOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
                <p className="text-white font-bold">Ваш комментарий:</p>
                <span className="text-white text-sm break-words">{review.comment}</span>
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
    )
}
