import { StarIcon } from "@/shared/assets";
import { useState } from "react";
import { StarRatingProps } from "../model/StarRatingProps";

export const StarRating = ({
    value,
    readOnly = false,
    size = 30,
    error,
    onChange
}: StarRatingProps) => {
    const [hovered, setHovered] = useState(0);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => {
                    const filled = hovered ? star <= hovered : star <= value;

                    return (
                        <div key={star}>
                            <StarIcon
                                onClick={!readOnly ? () => onChange?.(star) : undefined}
                                onMouseEnter={
                                    !readOnly ? () => setHovered(star) : undefined
                                }
                                onMouseLeave={
                                    !readOnly ? () => setHovered(0) : undefined
                                }
                                fill={filled ? "facc15" : "none"}
                                className={`${!readOnly && "cursor-pointer"} ${filled ? "fill-yellow" : "fill-yellow/30"
                                    }`}
                                width={`${size}px`}
                                height={`${size}px`}
                            />
                        </div>
                    );
                })}
            </div>
            {error?.message && <span className="text-red-500 text-sm">{error.message}</span>}
        </div>
    );
};
