import { fetchUserData, uploadAvatar } from "@/entities/User";
import {
    useActions,
    useAppSelector,
    useModal,
    useNotification,
} from "@/shared/hooks";
import { useCallback, useRef, useState } from "react";
import { UserProfileView } from "./UserProfileView";
import { IShipping, IUser } from "@/shared/types";
import { shippingSelector } from "@/entities/Shipping";

export const UserProfile = ({ user }: { user: IUser | null }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { notifySuccess, notifyError } = useNotification();
    const { isOpen, contentType, openModal, closeModal } = useModal();
    const shipping = useAppSelector(shippingSelector.shipping);
    const [shippingData, setShippingData] = useState<IShipping>(shipping);
    const { updateAvatar } = useActions();

    const handleFileUpload = useCallback(async (file: File) => {
        try {
            await uploadAvatar(file);
            const newData = await fetchUserData();
            if (newData) {
                updateAvatar(newData.picture);
                notifySuccess("Аватар был изменен :)");
            }
        } catch (err) {
            console.error(err);
            notifyError("Что-то пошло не так... Попробуй еще раз!");
        }
    }, [updateAvatar, notifyError, notifySuccess])

    const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target?.files?.[0];
        if (file) {
            handleFileUpload(file);
        }
    }, [handleFileUpload])


    const handleChangeShippingData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setShippingData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }, [])

    return (
        <UserProfileView
            user={user}
            isOpen={isOpen}
            contentType={contentType}
            fileInputRef={fileInputRef}
            shippingData={shippingData}
            handleUpload={handleUpload}
            openModal={openModal}
            closeModal={closeModal}
            handleChangeShippingData={handleChangeShippingData}
        />
    );
};