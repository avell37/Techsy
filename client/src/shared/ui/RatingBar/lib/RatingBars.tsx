import { useMemo } from "react";
import { RatingBarItem } from "../ui/RatingBarItem";
import { RatingBarsProps } from "../model/RatingBarProps";

export const RatingBars = ({ counts, total }: RatingBarsProps) => {
    const starsArray = [5, 4, 3, 2, 1] as const;

    const bars = useMemo(() => {
        return starsArray.map((stars) => {
            const count = counts[stars] || 0;
            const percentage = total > 0 ? (count / total) * 100 : 0;
            return { stars, count, percentage }
        })
    }, [counts, total])

    return (
        <div className="w-full space-y-4">
            {bars.map(({ stars, count, percentage }) => (
                <RatingBarItem
                    key={stars}
                    stars={stars}
                    count={count}
                    percentage={percentage}
                />
            ))}
        </div>
    );
};