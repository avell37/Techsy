import { Button } from "../../external/Button/Button"

interface PageCardProps {
    title: string;
    subtitle?: string;
    buttonLabel?: string;
    onClick?: () => void;
    children: React.ReactNode
}

export const StoreCard = ({
    title,
    subtitle,
    buttonLabel,
    onClick,
    children
}: PageCardProps) => {
    return (
        <div className="flex w-full min-h-fit mt-5">
            <div className="w-full p-8 border-1 border-primary-900/30 rounded-xl bg-gradient shadow-lg">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-white text-xl">{title}</h1>
                        {subtitle && (
                            <span className="text-sm text-gray-500">{subtitle}</span>
                        )}
                    </div>
                    {buttonLabel && (
                        <Button
                            variant="ghost"
                            className="flex justify-center items-center apply-button bg-primary-900/30 hover:bg-primary-900"
                            onClick={onClick}
                        >
                            Добавить
                        </Button>
                    )}
                </div>
                <div className="mt-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
