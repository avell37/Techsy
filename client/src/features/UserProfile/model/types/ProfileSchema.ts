import { IUser } from "@/shared/types/IUser";
import { RefObject } from "react";
import { ModalContentType } from "@/shared/hooks";

export interface UserProfileSchema {
    user: IUser | null,
    editedData: {
        username: string,
        email: string
    },
    setEditedData: (data: { username: string, email: string}) => void,
    userData: {
        username: string,
        email: string,
        role: string
    },
    setUserData: (data: { username: string, email: string, role: string}) => void,
}

export interface ProfileSchema {
    user: IUser | null,
    handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void,
    fileInputRef: RefObject<HTMLInputElement | null>,
    userData: {
        username: string,
        email: string,
        role: string
    },
    editedData: {
        username: string,
        email: string
    },
    setEditedData: (data: { username: string, email: string}) => void,
    handleSave: () => void,
    isOpen: boolean,
    contentType: ModalContentType,
    openModal: (contentType: ModalContentType) => void,
    closeModal: () => void,
}