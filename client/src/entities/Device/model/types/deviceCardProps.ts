import { IDevice } from "@/shared/types";

export interface DeviceCardProps {
    device: IDevice;
    onClick: () => void;
    isFavorite?: boolean;
    addToBasket: () => void;
}