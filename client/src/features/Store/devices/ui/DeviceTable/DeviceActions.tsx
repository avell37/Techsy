import { Button, Dropdown } from "@/shared/ui";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import type { IDevice } from "@/entities/Device";
import { ConfirmDialog } from "@/shared/ui/custom";
import { useDeviceActions } from "../../model/hooks/useDeviceActions";

type DeviceActionsProps = {
    device: IDevice;
}

export const DeviceActions = ({ device }: DeviceActionsProps) => {
    const items = useDeviceActions(device)
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
                title="Удалить устройство?"
                description="Это действие нельзя будет отменить. Устройство будет удален навсегда."
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
