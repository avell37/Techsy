import icon from "./default-user.png";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { changeUserData, uploadAvatar } from "@/shared/api/userApi";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "@/shared/config/consts";
import { useAppDispatch } from "@/shared/types/useAppDispatch";
import { fetchUser } from "@/app/store/reducers/userSlice/userSlice";
import { useAppSelector } from "@/shared/types/useAppSelector";

export const UserProfile: React.FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.userReducer.currentUser);
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [fileName, setFileName] = useState("Файл не выбран");
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
        dispatch(fetchUser());
    }, [dispatch]);

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
            const userData = await uploadAvatar(file);
            console.log("yes", userData);
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
                setUserData(decoded);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex justify-center w-full gap-[100px]">
            <div className="flex flex-col gap-[20px] items-center justify-center">
                <div className="border-2 border-[#3A177F] rounded-full bg-transparent">
                    <img src={icon} className="w-[150px] h-[150px]" />
                </div>
                <div className="flex items-center">
                    <Input
                        className="hidden"
                        noWrap
                        type="file"
                        onChange={handleUpload}
                        ref={fileInputRef}
                    />
                    <Button
                        onClick={() => fileInputRef.current?.click()}
                        text="Выбрать файл"
                        className="rounded-md w-[200px] h-[50px] bg-[#5120B8] font-bold focus:outline-none cursor-pointer text-white"
                    />
                </div>
                {userData?.role === "Admin" ? (
                    <Button
                        className="rounded-md w-[200px] h-[50px] bg-[#5120B8] font-bold focus:outline-none cursor-pointer text-white"
                        text="Админ панель"
                        onClick={() => navigate(ADMIN_ROUTE)}
                    />
                ) : null}
            </div>
            <div className="flex flex-col gap-[20px] min-w-[700px]">
                <p className="text-white mb-[20px]">
                    Ваша роль: {userData.role}
                </p>
                <p className="text-white">Имя пользователя:</p>
                <div className="flex gap-[10px]">
                    <Input
                        noWrap
                        className="max-w-[400px] w-full border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-2 text-start rounded-md text-white outline-none"
                        type="text"
                        placeholder="Ваш username"
                        value={editedData?.username}
                        onChange={(e) =>
                            setEditedData({
                                ...editedData,
                                username: e.target.value,
                            })
                        }
                    />
                    {editedData.username !== userData.username && (
                        <>
                            <Button
                                className="rounded-md w-[200px] h-[42px] bg-[#5120B8] font-bold focus:outline-none cursor-pointer text-white"
                                text="Изменить"
                                onClick={handleSave}
                            />
                            <Button
                                className="rounded-md w-[200px] h-[42px] bg-red-900 font-bold focus:outline-none cursor-pointer text-white"
                                text="Отменить"
                                onClick={() => setEditedData(userData)}
                            />
                        </>
                    )}
                </div>
                <p className="text-white">E-mail:</p>
                <div className="flex gap-[10px]">
                    <Input
                        noWrap
                        className="max-w-[400px] w-full border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-2 text-start rounded-md text-white outline-none"
                        type="text"
                        placeholder="Ваш e-mail"
                        value={editedData?.email}
                        onChange={(e) =>
                            setEditedData({
                                ...editedData,
                                email: e.target.value,
                            })
                        }
                    />
                    {editedData.email !== userData.email && (
                        <>
                            <Button
                                className="rounded-md w-[200px] h-[42px] bg-[#5120B8] font-bold focus:outline-none cursor-pointer text-white"
                                text="Изменить"
                                onClick={handleSave}
                            />
                            <Button
                                className="rounded-md w-[200px] h-[42px] bg-red-900 font-bold focus:outline-none cursor-pointer text-white"
                                text="Отменить"
                                onClick={() => setEditedData(userData)}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
