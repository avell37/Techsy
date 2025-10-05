import { AppDispatch } from "@/app/providers/store/store";
import { IDevice, IUser } from "@/shared/types";

export interface DevicePageDescriptionSchema {
    device: IDevice | null,
}

export interface DevicePageInfoSchema extends DevicePageDescriptionSchema {
    isFavorite: boolean,
    toggleFavorites: () => void,
    notifyError: (message: string) => void,
    notifySuccess: (message: string) => void,
}

export interface DevicePageReviewsSchema {
    currentUser: IUser | null,
    dispatch?: AppDispatch
}

export interface DevicePageSchema extends DevicePageInfoSchema, DevicePageDescriptionSchema, DevicePageReviewsSchema { }