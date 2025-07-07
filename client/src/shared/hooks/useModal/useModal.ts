import { useState } from "react";

export type ModalContentType =
    'addBrand' |
    'addType' |
    'addDevice' |
    'deleteBrand' |
    'deleteType' |
    'deleteDevice' |
    'addReview' |
    'editUsername' |
    'editEmail' |
    'editPassword'

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentType, setContentType] = useState<ModalContentType | null>(null);

    const openModal = (type: ModalContentType) => {
        setContentType(type);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setContentType(null);
    }

    return {
        isOpen,
        contentType,
        openModal,
        closeModal
    }
}