import { Button } from "@/shared/ui/ui-lib/Button/Button"

interface FormWrapperProps {
    handleSubmit: () => void;
    children: React.ReactNode;
    className?: string;
    buttonText?: string;
}

export const FormWrapper = ({handleSubmit, children, className, buttonText}: FormWrapperProps) => {
    return (
        <form 
            onSubmit={handleSubmit} 
            className="flex flex-col gap-[30px] max-sm:px-2"
        >
            {children}
            <div className="flex justify-end mb-6 mr-4 gap-[10px]">
                <Button
                    type="submit"
                    className="absolute right-0 text-white flex justify-center items-center rounded-md 
                    border-1 border-primary-900/30 hover:border-primary-900"
                >
                    {buttonText}
                </Button>
            </div>
        </form>
    )
}
