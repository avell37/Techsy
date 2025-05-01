import { ModalContentType } from "../model/useModal";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    contentType: ModalContentType;
}

export interface FormProps {
    onClose: () => void;
}