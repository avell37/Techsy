import { AppDispatch } from "@/app/providers/store/store";
import { ModalContentType } from "@/shared/hooks";
import { IDevice, IReview, IUser } from "@/shared/types";

export interface DevicePageDescriptionSchema {
    device: IDevice | null,
}

export interface DevicePageInfoSchema extends DevicePageDescriptionSchema {
    isFavorite: boolean,
    toggleFavorites: () => void,
    dispatch: AppDispatch,
    notifyError: (message: string) => void,
    notifySuccess: (message: string) => void,
}

export interface DevicePageReviewsSchema {
    currentUser: IUser | null,
    reviews: IReview[],
    isOpen: boolean,
    contentType: ModalContentType,
    closeModal: () => void,
    openModal: (type: ModalContentType) => void,
    handleAddReview: () => void,
    handleDeleteReview: (reviewId: string) => void,
}

export interface DevicePageSchema extends DevicePageInfoSchema, DevicePageDescriptionSchema, DevicePageReviewsSchema {}