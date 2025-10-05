import { IType } from "@/shared/types";
import { Button, Dropdown } from "@/shared/ui";
import { MoreHorizontal } from "lucide-react";
import { ConfirmDialog } from "@/shared/ui/ConfirmDialog/ConfirmDialog";
import { useState } from "react";
import { useTypeActions } from "../../model/hooks/useTypeActions";

interface TypeActionsProps {
    type: IType
}

export const TypeActions = ({ type }: TypeActionsProps) => {
    const items = useTypeActions(type);

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
                title="Удалить тип?"
                description="Это действие нельзя будет отменить. Тип будет удален навсегда."
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

