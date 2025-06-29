export const checkFavoriteDevices = ({
    deviceId,
    favoriteDevices,
}: {
    deviceId: string;
    favoriteDevices?: { device: { id: string } }[];
}): boolean => {
    if (favoriteDevices) {
        return favoriteDevices.some((fav) => fav.device && fav.device.id === deviceId);
    }
    return false;
};