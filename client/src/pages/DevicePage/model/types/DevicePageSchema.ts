import { ModalContentType } from "@/shared/hooks";
import { IDevice, IReview, IUser } from "@/shared/types";

export interface DevicePageDescriptionSchema {
    device: IDevice | null,
}

export interface DevicePageReviewsSchema {
    currentUser: IUser | null,
    reviews: IReview[],
    isOpen: boolean,
    contentType: ModalContentType,
    closeModal: () => void,
    openModal: (type: ModalContentType) => void,
    handleDeleteReview: (reviewId: string) => void
}

export interface DevicePageSchema extends DevicePageDescriptionSchema, DevicePageReviewsSchema {}