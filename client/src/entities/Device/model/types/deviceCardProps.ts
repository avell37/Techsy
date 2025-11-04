import type { IDevice } from "./IDevice";

export interface DeviceCardProps {
    device: IDevice;
    isFavorite?: boolean;
    onClick: () => void;
    addToBasket: () => void;
    checkInBasket: (deviceId: string) => boolean;
}