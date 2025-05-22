export const checkFavoriteDevices = ({
    deviceId,
    favoriteDevices,
}: {
    deviceId: string;
    favoriteDevices: { device: {id: string} }[];
}): boolean => {
    return favoriteDevices.some((fav) => fav.device && fav.device.id === deviceId);
};