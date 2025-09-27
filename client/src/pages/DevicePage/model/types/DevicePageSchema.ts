import { AppDispatch } from "@/app/providers/store/store";
import { IDevice, IReview, IUser } from "@/shared/types";

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
    reviews: IReview[],
    dispatch?: AppDispatch
    handleAddReview: () => void,
    handleDeleteReview: (reviewId: string) => void,
}

export interface DevicePageSchema extends DevicePageInfoSchema, DevicePageDescriptionSchema, DevicePageReviewsSchema { }