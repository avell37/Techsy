import { 
    AlertDialog, 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle, 
} from "../../external/Alert/Alert"

interface ConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    description?: string;
    cancelText?: string;
    actionText?: string;
    onConfirm: () => void;
}

export const ConfirmDialog = ({
    open,
    onOpenChange,
    title,
    description,
    cancelText,
    actionText,
    onConfirm
}: ConfirmDialogProps) => {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="bg-gradient">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">{title}</AlertDialogTitle>
                    {description && (
                        <AlertDialogDescription className="text-xs text-red-400">{description}</AlertDialogDescription>
                    )}
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel
                        className="bg-primary-900/30 text-white"
                    >
                        {cancelText}
                    </AlertDialogCancel>
                    <AlertDialogAction 
                        className="bg-red-700/30 text-white hover:bg-red-600"
                        onClick={onConfirm}
                    >
                        {actionText}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
