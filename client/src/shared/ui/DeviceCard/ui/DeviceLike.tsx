import { Button } from "@shared/ui";
import { LikeIcon } from "@/shared/assets";

interface Props {
    onClick: () => void;
    isFavorite?: boolean;
    className?: string;
}

export const DeviceLike = ({ onClick, isFavorite, className }: Props) => {
    return (
        <>
            <Button onClick={onClick}>
                <LikeIcon
                    isFavorite={isFavorite}
                    width="25px"
                    height="25px"
                    className={className}
                />
            </Button>
        </>
    );
};
