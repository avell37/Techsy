import { Card } from "@/shared/ui"

interface UserCardProps {
    onClick: () => void;
    title: string;
    subtitle: string;
    icon: React.ReactNode
}

export const UserCard = ({onClick, title, subtitle, icon}: UserCardProps) => {
    return (
        <Card 
            className="flex justify-between px-4 items-center max-w-[350px] h-[100px] w-full border border-indigo-900 rounded-xl 
            hover:border-primary-900 hover:bg-primary-300/30 transition-all bg-gradient text-white cursor-pointer"
            onClick={onClick}
        >
            <div>
                <div>{title}</div>
                <span className="text-sm text-gray-400">{subtitle}</span>
            </div>
            {icon}
        </Card>
    )
}
