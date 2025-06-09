import { Modal } from "@/features/ManageModal";
import { ChangePhotoIcon } from "@/shared/assets/icons/ChangePhotoIcon";
import { EditIcon } from "@/shared/assets/icons/EditIcon";
import { Input } from "@/shared/ui";
import { ProfileSchema } from "@features/UserProfile";

export const UserProfileView = ({
    user,
    handleUpload,
    fileInputRef,
    editedData,
    setEditedData,
    isOpen,
    contentType,
    openModal,
    closeModal,
}: ProfileSchema) => {
    return (
        <div className="flex w-full h-full mt-5">
            <div className="w-full p-8 border-1 border-[#5120B8]/30 rounded-xl filters-bg-gradient shadow-lg">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex flex-col items-center gap-6">
                        <div
                            className="group relative w-[200px] h-[200px] border-2 border-[#3A177F] rounded-xl bg-[#1A1238]/20 overflow-hidden 
                            cursor-pointer transition-all duration-300 hover:border-[#5120B8] hover:shadow-lg"
                            onClick={() => fileInputRef?.current?.click()}
                        >
                            {user?.picture && (
                                <>
                                    <img
                                        src={
                                            user.picture.startsWith("http")
                                                ? user.picture
                                                : import.meta.env.VITE_API_URL +
                                                  "/avatars/" +
                                                  user?.picture
                                        }
                                        className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50"
                                        alt="Фото профиля"
                                    />
                                    <div
                                        className="absolute inset-0 flex items-center justify-center opacity-0 
                                                    group-hover:opacity-100 transition-all duration-300"
                                    >
                                        <div className="flex flex-col items-center gap-2">
                                            <ChangePhotoIcon />
                                            <span className="text-white text-sm font-medium">
                                                Изменить фото
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="text-white/70 text-sm">
                            Рекомендуемый размер: 200x200
                        </div>
                        <Input
                            className="hidden"
                            noWrap
                            type="file"
                            accept="image/*"
                            onChange={handleUpload}
                            ref={fileInputRef}
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-8">
                            <div className="space-y-3">
                                <div className="space-y-3">
                                    <label className="text-white/70 text-sm font-medium">
                                        Имя пользователя
                                    </label>
                                    <div className="flex gap-4 items-start">
                                        <Input
                                            noWrap
                                            className="flex-1 max-w-[400px] border-1 border-[#5120B8]/30 hover:border-[#5120B8]
                                                    hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-3 text-start rounded-lg text-white
                                                    outline-none transition-all duration-300"
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
                                        <div
                                            className="cursor-pointer flex items-center justify-center p-2 bg-[#5120B8] rounded-lg"
                                            onClick={() =>
                                                openModal("editProfile")
                                            }
                                        >
                                            <EditIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-white/70 text-sm font-medium">
                                        E-mail
                                    </label>
                                    <div className="flex gap-4 items-start">
                                        <Input
                                            noWrap
                                            className="flex-1 max-w-[400px] border-1 border-[#5120B8]/30 hover:border-[#5120B8] 
                                            hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-3 text-start rounded-lg text-white 
                                            outline-none transition-all duration-300"
                                            type="email"
                                            placeholder="Ваш e-mail"
                                            value={editedData?.email}
                                            onChange={(e) =>
                                                setEditedData({
                                                    ...editedData,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                        <div className="cursor-pointer flex items-center justify-center p-2 bg-[#5120B8] rounded-lg">
                                            <EditIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                contentType={contentType}
            />
        </div>
    );
};

{
    /* {editedData.username !==
                                            userData.username && (
                                            <div className="flex gap-2">
                                                <Button
                                                    className="h-[42px] px-6 bg-[#5120B8] font-medium rounded-lg focus:outline-none cursor-pointer text-white transition-all duration-300 hover:bg-[#4F45E4]"
                                                    text="Сохранить"
                                                    onClick={handleSave}
                                                />
                                                <Button
                                                    className="h-[42px] px-6 bg-red-900/80 font-medium rounded-lg focus:outline-none cursor-pointer text-white transition-all duration-300 hover:bg-red-900"
                                                    text="Отменить"
                                                    onClick={() =>
                                                        setEditedData(userData)
                                                    }
                                                />
                                            </div>
                                        )} */
}

// {
//     editedData.email !== userData.email && (
//         <div className="flex gap-2">
//             <Button
//                 className="h-[42px] px-6 bg-[#5120B8] font-medium rounded-lg focus:outline-none cursor-pointer text-white transition-all duration-300 hover:bg-[#4F45E4]"
//                 text="Сохранить"
//                 onClick={handleSave}
//             />
//             <Button
//                 className="h-[42px] px-6 bg-red-900/80 font-medium rounded-lg focus:outline-none cursor-pointer text-white transition-all duration-300 hover:bg-red-900"
//                 text="Отменить"
//                 onClick={() => setEditedData(userData)}
//             />
//         </div>
//     );
// }
