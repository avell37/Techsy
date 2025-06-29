import { StarIcon } from "@/shared/assets";

interface Props {
    noWrap?: boolean;
    rating: string | number;
    iconClass?: string;
    spanClass?: string;
}

export const DeviceRating = ({
    rating,
    iconClass,
    spanClass,
}: Props) => {
    return (
        <div className="flex items-center">
            <StarIcon width="20px" height="20px" className={iconClass} />
            <span className={spanClass}>{rating}</span>
        </div>
    );
};
