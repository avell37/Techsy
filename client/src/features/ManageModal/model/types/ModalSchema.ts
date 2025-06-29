import { ModalContentType } from "@/shared/hooks";

export interface ModalSchema {
    isOpen: boolean;
    onClose: () => void;
    contentType: ModalContentType | null;
}