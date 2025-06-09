import {
    changeUserData,
    fetchUserData,
    uploadAvatar,
} from "@/shared/api/userApi";
import { useAppDispatch, useModal, useNotification } from "@/shared/hooks";
import { useRef } from "react";
import { updateAvatar } from "@/entities/User";
import { UserProfileView } from "./UserProfileView";
import { UserProfileSchema } from "../model/types/ProfileSchema";

export const UserProfile = ({
    user,
    editedData,
    setEditedData,
    userData,
    setUserData,
}: UserProfileSchema) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const { notifySuccess, notifyError } = useNotification();
    const { isOpen, contentType, openModal, closeModal } = useModal();

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target?.files?.[0];
        if (!file) return;

        try {
            await uploadAvatar(file);
            const newData = await fetchUserData();
            if (newData) {
                dispatch(updateAvatar(newData.picture));
                notifySuccess("Аватар был изменен :)");
            }
        } catch (err) {
            console.error(err);
            notifyError("Что-то пошло не так... Попробуй еще раз!");
        }
    };

    const handleSave = async () => {
        try {
            if (
                editedData.username !== userData.username ||
                editedData.email !== userData.email
            ) {
                const decoded = await changeUserData(
                    editedData.username,
                    editedData.email
                );
                if (decoded) {
                    const { username, email, role } = decoded as {
                        username: string;
                        email: string;
                        role: string;
                    };
                    setUserData({ username, email, role });
                    notifySuccess("Данные успешно изменены!");
                } else {
                    console.error("error");
                    notifyError("Что-то пошло не так... Попробуй еще раз!");
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <UserProfileView
            user={user}
            handleUpload={handleUpload}
            fileInputRef={fileInputRef}
            userData={userData}
            editedData={editedData}
            setEditedData={setEditedData}
            handleSave={handleSave}
            isOpen={isOpen}
            contentType={contentType}
            openModal={openModal}
            closeModal={closeModal}
        />
    );
};
