import { IDevice } from "@/shared/types";

export interface DeviceSchema {
    device: IDevice;
    onClick: () => void;
    isFavorite?: boolean
}