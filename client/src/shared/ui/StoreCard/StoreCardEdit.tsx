import { ArrowLeft } from "lucide-react"
import { Button } from "../ui-lib/Button/Button"
import { useNavigate } from "react-router-dom"

type StoreCardEditProps = {
    title: string;
    subtitle: string;
    children: React.ReactNode
}

export const StoreCardEdit = ({title, subtitle, children}: StoreCardEditProps) => {

    const navigate = useNavigate();

    return (
        <div className="w-full p-8 pl-2 border-1 border-primary-900/30 rounded-xl bg-gradient shadow-lg">
            <div className="relative flex">
                <Button
                    className="mr-2 p-1"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft className="w-5 h-5 text-white" />
                </Button>
                <div>
                    <div className='text-white'>
                        <h1 className="text-xl">{title}</h1>
                        <span className="text-sm text-gray-500">{subtitle}</span>
                    </div>
                    <div className="flex w-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
