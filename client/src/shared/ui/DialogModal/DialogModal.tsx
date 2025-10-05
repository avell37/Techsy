import { Button } from "../ui-lib/Button/Button";
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger
} from "../ui-lib/Dialog/Dialog"

interface DialogModalProps {
    title: string,
    description: string,
    trigger: React.ReactNode,
    children: React.ReactNode
}

export const DialogModal = ({
    title,
    description,
    trigger,
    children,
}: DialogModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="bg-gradient">
                <DialogHeader>
                    <DialogTitle className="font-bold text-xl text-white">{title}</DialogTitle>
                    <DialogDescription className="text-gray-400">{description}</DialogDescription>
                </DialogHeader>
                <div className="mt-6">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )

}
