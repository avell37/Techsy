import type { IDevice } from "@/entities";

export const checkFavoriteDevices = ({
    deviceId,
    favorites,
}: {
    deviceId: string;
    favorites?: IDevice[];
}): boolean => {
    if (favorites) {
        return favorites.some((fav) => fav && fav.id === deviceId);
    }
    return false;
};
