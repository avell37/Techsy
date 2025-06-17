import { RatingBarsProps } from "@/pages/DevicePage/model/types/starCountSchema";

export const RatingBars = ({ counts, total }: RatingBarsProps) => {
    const starsArray = [5, 4, 3, 2, 1] as const;

    return (
        <div className="w-full space-y-4">
            {starsArray.map((stars) => {
                const count = counts[stars];
                const percentage = total > 0 ? (count / total) * 100 : 0;

                return (
                    <div key={stars} className="flex items-center gap-2 max-md:flex-wrap">
                        <div className="flex items-center gap-1">
                            <span className="text-[#8A4FFF]">{stars}</span>
                        </div>
                        <div className="flex-1 h-2 bg-[#1A1238]/30 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#8A4FFF] rounded-full transition-all duration-300"
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                        <span className="text-[#8A4FFF]/70 w-8 text-right">{count}</span>
                    </div>
                );
            })}
        </div>
    );
};