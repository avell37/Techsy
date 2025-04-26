import {
    changeUserData,
    fetchUserData,
    uploadAvatar,
} from "@/shared/api/userApi";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/shared/types/useAppSelector";
import { UserProfileView } from "./UserProfileView";
import { useAppDispatch } from "@/shared/types/useAppDispatch";
import { updateAvatar } from "@/entities/User/model/userSlice";

export const UserProfile: React.FC = () => {
    const user = useAppSelector((state) => state.userReducer.currentUser);
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        role: "",
    });
    const [editedData, setEditedData] = useState({
        username: "",
        email: "",
    });

    useEffect(() => {
        if (user) {
            setUserData({
                username: user?.username,
                email: user?.email,
                role: user?.role,
            });
            setEditedData({
                username: user?.username,
                email: user?.email,
            });
        }
    }, [user]);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target?.files?.[0];
        if (!file) return;

        try {
            await uploadAvatar(file);
            const newData = await fetchUserData();
            dispatch(updateAvatar(newData.picture));
        } catch (err) {
            console.error(err);
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
                } else {
                    console.error("error");
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
            navigate={navigate}
            editedData={editedData}
            setEditedData={setEditedData}
            handleSave={handleSave}
        />
    );
};
