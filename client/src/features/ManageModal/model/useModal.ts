import { useState } from "react";

export type ModalContentType = 'addBrand' | 'addType' | 'addDevice' | null;

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentType, setContentType] = useState<ModalContentType>(null);

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