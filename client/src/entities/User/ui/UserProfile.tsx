import {
    fetchUserData,
    uploadAvatar,
} from "@/entities/User/api/userApi";
import {
    useAppDispatch,
    useAppSelector,
    useModal,
    useNotification,
} from "@/shared/hooks";
import { useRef, useState } from "react";
import { updateAvatar } from "@/entities/User";
import { UserProfileView } from "./UserProfileView";
import { IShipping, IUser } from "@/shared/types";

export const UserProfile = ({ user }: { user: IUser | null }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const { notifySuccess, notifyError } = useNotification();
    const { isOpen, contentType, openModal, closeModal } = useModal();
    const { shipping } = useAppSelector((state) => state.shippingReducer);
    const [shippingData, setShippingData] = useState<IShipping>(shipping);

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


    const handleChangeShippingData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setShippingData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <UserProfileView
            user={user}
            handleUpload={handleUpload}
            fileInputRef={fileInputRef}
            isOpen={isOpen}
            contentType={contentType}
            openModal={openModal}
            closeModal={closeModal}
            shippingData={shippingData}
            handleChangeShippingData={handleChangeShippingData}
        />
    );
};