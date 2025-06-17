import { Modal } from "@/features/ManageModal";
import { ChangePhotoIcon, EditIcon } from "@/shared/assets";
import { Input } from "@/shared/ui";
import { ProfileProps } from "../model/types/profileProps";
import { ShippingForm } from "@/features/ModalForms";

export const UserProfileView = ({
    user,
    handleUpload,
    fileInputRef,
    isOpen,
    contentType,
    openModal,
    closeModal,
}: ProfileProps) => {
    return (
        <div className="flex w-full min-h-fit mt-5">
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
                                    <div className="flex gap-4 items-center">
                                        <Input
                                            noWrap
                                            className="flex-1 max-w-[400px] border-1 border-[#5120B8]/30 hover:border-[#5120B8]
                                                    hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-3 text-start rounded-lg text-white
                                                    outline-none transition-all duration-300"
                                            type="text"
                                            disabled
                                            placeholder="Ваш username"
                                            value={user?.username}
                                        />
                                        <div
                                            className="cursor-pointer flex items-center justify-center p-[10px] bg-[#5120B8] rounded-lg"
                                            onClick={() =>
                                                openModal("editUsername")
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
                                    <div className="flex gap-4 items-center">
                                        <Input
                                            noWrap
                                            className="flex-1 max-w-[400px] border-1 border-[#5120B8]/30 hover:border-[#5120B8] 
                                            hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-3 text-start rounded-lg text-white 
                                            outline-none transition-all duration-300"
                                            type="email"
                                            disabled
                                            placeholder="Ваш e-mail"
                                            value={user?.email}
                                        />
                                        <div
                                            className="cursor-pointer flex items-center justify-center p-[10px] bg-[#5120B8] rounded-lg"
                                            onClick={() =>
                                                openModal("editEmail")
                                            }
                                        >
                                            <EditIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 space-y-8">
                    <div className="p-6 border-1 border-[#5120B8]/30 rounded-xl bg-[#1A1238]/20">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-white text-lg font-medium mb-2">
                                    Безопасность аккаунта
                                </h3>
                                <p className="text-white/70 text-sm">
                                    Рекомендуется регулярно менять пароль для
                                    обеспечения безопасности вашего аккаунта
                                </p>
                            </div>
                            <button
                                onClick={() => openModal("editPassword")}
                                className="px-6 py-3 bg-[#5120B8] hover:bg-[#4F45E4] rounded-lg text-white font-medium 
                                transition-all duration-300 flex items-center gap-2"
                            >
                                <EditIcon />
                                Сменить пароль
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-white/70 text-sm font-medium mb-4">
                            Адрес доставки
                        </label>
                        <ShippingForm />
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
