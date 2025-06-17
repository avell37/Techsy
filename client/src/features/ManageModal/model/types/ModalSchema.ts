import { ModalContentType } from "@/shared/hooks";

export interface ModalSchema {
    isOpen: boolean;
    onClose: () => void;
    contentType: ModalContentType;
}

export interface DeleteSchema {
    entityType: "brand" | "type" | "device",
    entityName: string,
    onClose: () => void;
}

export interface EditSchema {
    onClose: () => void;
    edit?: "username" | "email" | "password";
}