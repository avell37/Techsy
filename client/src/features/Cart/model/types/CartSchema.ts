import { BasketItemSchema } from "@/entities";
import { ModalContentType } from "@/shared/hooks";

export interface CartDeviceSchema {
    device: BasketItemSchema,
    isFavorite: boolean,
    onClick: () => void,
}

export interface CartSchema {
    setSelectedPayment: (paymentMethod: string) => void,
    totalPrice: number,
    handleCreateOrder: () => void,
    isOpen: boolean,
    contentType: ModalContentType,
    closeModal: () => void,
    openModal: (type: ModalContentType) => void,
}