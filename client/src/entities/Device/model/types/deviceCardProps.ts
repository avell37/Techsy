import { IDevice } from "@/shared/types";

export interface DeviceCardProps {
    device: IDevice;
    isFavorite?: boolean;
    onClick: () => void;
    addToBasket: () => void;
    checkInBasket: (deviceId: string) => boolean;
}