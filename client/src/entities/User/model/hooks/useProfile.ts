import { fetchUserData, uploadAvatar, userSelector } from "@/entities/User";
import {
    useActions,
    useAppSelector,
    useNotification,
} from "@/shared/hooks";
import { useCallback, useRef, useState } from "react";
import { IShipping } from "@/shared/types";
import { shippingSelector } from "@/entities/Shipping";
import { ProfileProps } from "../types/profileProps";

export const useProfile = (): ProfileProps => {
    const user = useAppSelector(userSelector.currentUser);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { notifySuccess, notifyError } = useNotification();
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

    return {
        user,
        fileInputRef,
        shippingData,
        handleUpload,
        handleChangeShippingData,
    }
}