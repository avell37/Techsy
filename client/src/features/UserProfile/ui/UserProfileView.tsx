import { Input, Button } from "@/shared/ui";
import { ADMIN_ROUTE } from "@/shared/config/consts";
import { ProfileSchema } from "@features/UserProfile";

export const UserProfileView = ({
    user,
    handleUpload,
    fileInputRef,
    userData,
    navigate,
    editedData,
    setEditedData,
    handleSave,
}: ProfileSchema) => {
    return (
        <div className="flex justify-center w-full gap-[100px]">
            <div className="flex flex-col gap-[20px] items-center justify-center">
                <div className="w-[150px] h-[150px] border-2 border-[#3A177F] rounded-full bg-transparent overflow-hidden">
                    {user?.picture && (
                        <img
                            src={
                                user.picture.startsWith("http")
                                    ? user.picture
                                    : import.meta.env.VITE_API_URL +
                                      "/avatars/" +
                                      user?.picture
                            }
                            className="w-[150px] h-[150px]"
                        />
                    )}
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
                        onClick={() => fileInputRef?.current?.click()}
                        text="Сменить аватарку"
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
