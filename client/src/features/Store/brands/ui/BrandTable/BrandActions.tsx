import { Button, Dropdown } from "@/shared/ui";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { ConfirmDialog } from "@/shared/ui/custom";
import { useBrandActions } from "../../model/hooks/useBrandActions";
import type { IBrand } from "@/entities/Brand";

interface BrandActionsProps {
    brand: IBrand
}

export const BrandActions = ({ brand }: BrandActionsProps) => {
    const items = useBrandActions(brand);

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
                title="Удалить бренд?"
                description="Это действие нельзя будет отменить. Бренд будет удален навсегда."
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

