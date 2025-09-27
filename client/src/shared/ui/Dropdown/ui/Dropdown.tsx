import { LoaderCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../ui-lib/Dropdown/Dropdown"
import { DropdownProps } from "../model/types/DropdownProps"
import { useNavigate } from "react-router-dom"

export const Dropdown = ({trigger, items, className}: DropdownProps) => {
    const navigate = useNavigate();

    return (
        <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {trigger}
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`bg-gradient z-1000 ${className}`} align="start">
                    {items.length ? (
                        items.map((item, i) => (
                        <div key={i}>
                            <DropdownMenuItem
                                className="text-white"
                                onClick={() => {
                                    if (item.onClick) item.onClick();
                                    if (item.route) navigate(item.route);
                                }}
                            >
                                {item.text}
                            </DropdownMenuItem>
                        </div>
                    ))
                    ) : (
                        <div className="flex justify-center items-center">
                            <LoaderCircle />
                        </div>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
    )
}
