import { IUser } from "@/shared/types/IUser";
import { RefObject } from "react";
import { IShipping } from "@/shared/types";

export interface ProfileProps {
    user: IUser | null,
    fileInputRef: RefObject<HTMLInputElement | null>,
    shippingData: IShipping,
    handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeShippingData: (e: React.ChangeEvent<HTMLInputElement>) => void,
}