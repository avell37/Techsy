import { Button } from "@/shared/ui/ui-lib/Button/Button"
import { DialogClose } from "../ui-lib/Dialog/Dialog";

interface FormWrapperProps {
    handleSubmit: () => void;
    children: React.ReactNode;
    className?: string;
    buttonText?: string;
    withClose?: boolean;
}

export const FormWrapper = ({ 
    handleSubmit, 
    children, 
    className, 
    buttonText,
    withClose 
}: FormWrapperProps) => {
    return (
        <form 
            onSubmit={handleSubmit} 
            className="flex flex-col gap-[30px] max-sm:px-2"
        >
            {children}
            <div className="flex justify-end gap-[10px]">
                <Button
                    type="submit"
                    className="text-white flex justify-center items-center rounded-md 
                    border-1 border-primary-900/30 hover:border-primary-900"
                >
                    {buttonText}
                </Button>
                {withClose && (
                    <DialogClose asChild>
                        <Button
                            type="button"
                            className="flex justify-center items-center cancel-button"
                        >
                            Закрыть
                        </Button>
                    </DialogClose>
                )}
            </div>
        </form>
    )
}
