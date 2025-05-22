import { ModalContentType } from "@/shared/hooks";

export interface ModalSchema {
    isOpen: boolean;
    onClose: () => void;
    contentType: ModalContentType;
}

export interface FormSchema {
    onClose: () => void;
}

export interface DeleteSchema {
    entityType: "brand" | "type" | "device",
    onClose: () => void;
}