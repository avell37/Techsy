import { StarIcon } from "@/shared/assets";
import { useState } from "react";

interface StarRatingProps {
    value: number;
    onChange: (value: number) => void;
}

export const StarRating = ({ value, onChange }: StarRatingProps) => {
    const [hovered, setHovered] = useState(0);

    return (
        <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => {
                const filled = hovered ? star <= hovered : star <= value;

                return (
                    <StarIcon
                        key={star}
                        onClick={() => onChange(star)}
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                        fill={filled ? "facc15" : "none"}
                        className={`cursor-pointer ${
                            filled ? "fill-[#ffe500]" : "fill-[#ffe500]/30"
                        }`}
                        width="30px"
                        height="30px"
                    />
                );
            })}
        </div>
    );
};
