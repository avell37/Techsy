import { IUser } from "@/shared/types/IUser";
import { RefObject } from "react";
import { ModalContentType } from "@/shared/hooks";
import { IShipping } from "@/shared/types";

export interface ProfileProps {
    user: IUser | null,
    handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void,
    fileInputRef: RefObject<HTMLInputElement | null>,
    isOpen: boolean,
    contentType: ModalContentType,
    openModal: (contentType: ModalContentType) => void,
    closeModal: () => void,
    shippingData: IShipping,
    handleChangeShippingData: (e: React.ChangeEvent<HTMLInputElement>) => void,
}