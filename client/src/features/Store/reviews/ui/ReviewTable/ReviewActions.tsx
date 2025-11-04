import { Button, Dropdown } from "@/shared/ui";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { ConfirmDialog } from "@/shared/ui/custom";
import { useReviewActions } from "../../model/hooks/useReviewActions";
import type { IReview } from "@/entities/Review";

type ReviewActionsProps = {
    review: IReview;
}

export const ReviewActions = ({ review }: ReviewActionsProps) => {
    const items = useReviewActions(review)
    const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
    const [confirmAction, setConfirmAction] = useState<(() => void) | null>(null);

    const handleDeleteClick = (action: () => void) => {
        setConfirmAction(() => action);
        setConfirmOpen(true);
    }

    return (
        <>
            <Dropdown 
                trigger={
                    <Button
                        variant="default"
                        size="none"
                        className="cursor-pointer"
                    >
                        <MoreHorizontal />
                    </Button>
                }
                items={items.map((item) =>
                    item.text === "Удалить"
                        ? {
                            ...item,
                            onClick: () => handleDeleteClick(item.onClick!)
                        }
                        : item
                    )}
            />

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
        </>
    )
}
