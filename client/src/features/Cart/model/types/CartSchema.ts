import { ModalContentType } from "@/shared/hooks";

export interface CartSchema {
    setSelectedPayment: (paymentMethod: string) => void,
    totalPrice: number,
    handleCreateOrder: () => void,
    isOpen: boolean,
    contentType: ModalContentType,
    closeModal: () => void,
    openModal: (type: ModalContentType) => void,
}