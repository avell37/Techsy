import { IUser } from "@/shared/types/IUser";
import { RefObject } from "react";
import { NavigateFunction } from "react-router-dom";

export interface UserProfileProps {
    user: IUser | null,
    handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void,
    fileInputRef: RefObject<HTMLInputElement | null>,
    userData: {
        username: string,
        email: string,
        role: string
    },
    navigate: NavigateFunction,
    editedData: {
        username: string,
        email: string
    },
    setEditedData: (data: { username: string, email: string}) => void,
    handleSave: () => void,
}