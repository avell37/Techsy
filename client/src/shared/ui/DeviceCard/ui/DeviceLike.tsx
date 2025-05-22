import { Button } from "@shared/ui";
import { LikeIcon } from "@/shared/assets";

interface Props {
    onClick: () => void;
    isFavorite?: boolean;
}

export const DeviceLike = ({ onClick, isFavorite }: Props) => {
    return (
        <>
            <Button onClick={onClick}>
                <LikeIcon
                    isFavorite={isFavorite}
                    width="25px"
                    height="25px"
                    className="absolute top-[5px] left-1"
                />
            </Button>
        </>
    );
};
