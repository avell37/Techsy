import { FC } from "react"
import { RatingBarItemProps } from "../model/RatingBarProps"

export const RatingBarItem: FC<RatingBarItemProps> = ({ stars, count, percentage }) => {
    return (
        <div key={stars} className="flex items-center gap-2 max-md:flex-wrap">
            <div className="flex items-center gap-1">
                <span className="text-white">{stars}</span>
            </div>
            <div className="flex-1 h-2 bg-primary-900/30 rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary-900 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <span className="text-gray-400 w-8 text-right">{count}</span>
        </div>
    )
}
