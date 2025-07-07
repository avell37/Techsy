import React from "react";
import { Modal, ModalContentType } from "@/features/ManageModal";
import { ChangePhotoIcon, defaultUser, EditIcon } from "@/shared/assets";
import { Button, Input } from "@/shared/ui";
import { ProfileProps } from "../model/types/profileProps";
import { ShippingForm } from "@/features/ModalForms";

export const UserProfileView = React.memo(
    ({
        user,
        fileInputRef,
        isOpen,
        contentType,
        openModal,
        closeModal,
        handleUpload,
    }: ProfileProps) => {
        const handleFileUpload = () => fileInputRef?.current?.click();

        const profileImage = user?.picture
            ? `${import.meta.env.VITE_API_URL}/uploads/avatars/${user.picture}`
            : defaultUser;

        const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
            const value = e.currentTarget.value as ModalContentType;
            openModal(value);
        };

        return (
            <div className="flex w-full min-h-fit mt-5">
                <div className="w-full p-8 border-1 border-primary-900/30 rounded-xl filters-bg-gradient shadow-lg">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex flex-col items-center gap-6">
                            <div
                                className="group relative w-[200px] h-[200px] border-2 border-indigo-900 rounded-xl bg-primary-300/20 
                            overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary-900 hover:shadow-lg"
                                onClick={handleFileUpload}
                            >
                                <div>
                                    <img
                                        src={profileImage}
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
                                </div>
                            </div>
                            <div className="text-white/70 text-sm">
                                Рекомендуемый размер: 200x200
                            </div>
                            <Input
                                className="hidden"
                                noWrap
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleUpload}
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col gap-8">
                                <div className="space-y-3">
                                    <div className="space-y-3">
                                        <label className="text-white/70 text-sm font-medium">
                                            Имя пользователя
                                        </label>
                                        <div className="flex gap-4 items-center max-sm:gap-2">
                                            <Input
                                                noWrap
                                                className="flex-1 max-w-[550px] border-1 border-primary-900/30 hover:border-primary-900
                                                    hover:bg-primary-300/30 p-3 text-start rounded-lg text-white
                                                    outline-none transition-all duration-300 max-sm:text-sm"
                                                type="text"
                                                disabled
                                                placeholder="Ваш username"
                                                value={user?.username || ""}
                                            />
                                            <Button
                                                value="editUsername"
                                                className="cursor-pointer flex items-center justify-center p-[10px] bg-primary-900 rounded-lg
                                            hover:bg-indigo-900 transition-all duration-300 max-sm:p-[4px]"
                                                onClick={handleOpenModal}
                                            >
                                                <EditIcon />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-white/70 text-sm font-medium">
                                            E-mail
                                        </label>
                                        <div className="flex gap-4 items-center max-sm:gap-2">
                                            <Input
                                                noWrap
                                                className="flex-1 max-w-[550px] border-1 border-primary-900/30 hover:border-primary-900
                                                    hover:bg-primary-300/30 p-3 text-start rounded-lg text-white 
                                                    outline-none transition-all duration-300 max-sm:text-sm"
                                                type="email"
                                                disabled
                                                placeholder="Ваш e-mail"
                                                value={user?.email || ""}
                                            />
                                            <Button
                                                value="editEmail"
                                                className="cursor-pointer flex items-center justify-center p-[10px] bg-primary-900 rounded-lg
                                            hover:bg-indigo-900 transition-all duration-300 max-sm:p-[4px]"
                                                onClick={handleOpenModal}
                                            >
                                                <EditIcon />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 space-y-8">
                        <div className="p-6 border-1 border-primary-900/30 rounded-xl bg-primary-300/20">
                            <div className="flex items-center justify-between security-responsive">
                                <div>
                                    <h3 className="text-white text-lg font-medium mb-2 max-md:text-sm">
                                        Безопасность аккаунта
                                    </h3>
                                    <p className="text-white/70 text-sm max-md:text-xs">
                                        Рекомендуется регулярно менять пароль
                                        для обеспечения безопасности вашего
                                        аккаунта
                                    </p>
                                </div>
                                <button
                                    onClick={() => openModal("editPassword")}
                                    className="ml-6 px-6 py-3 bg-primary-900 hover:bg-indigo-900 rounded-lg text-white font-medium 
                                transition-all duration-300 flex items-center gap-2 max-md:px-3 max-md:py-2 max-md:text-xs max-md:ml-0"
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
                    contentType={contentType}
                    onClose={closeModal}
                />
            </div>
        );
    }
);
