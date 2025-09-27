import { useProfile } from "../../model/hooks/useProfile";
import { Button, Input, Label } from "@/shared/ui";
import { DialogModal } from "@/shared/ui/DialogModal/DialogModal";
import { UserAvatar } from "./UserAvatar";
import { UserSecurity } from "./UserSecurity";
import { EditIcon } from "lucide-react";
import { UsernameForm } from "@/features/UserSettings/ui/UsernameForm";

export const UserProfile = () => {
    const { 
        user, 
        fileInputRef, 
        shippingData, 
        handleUpload, 
        handleChangeShippingData, 
    } = useProfile();

    return (
        <div className="flex w-full min-h-fit mt-5">
            <div className="w-full p-8 rounded-xl bg-gradient shadow-lg">
                <div className="flex flex-col md:flex-row gap-12">
                    <UserAvatar
                        username={user?.username}
                        picture={user?.picture}
                        fileInputRef={fileInputRef}
                        onUpload={handleUpload}
                    />
                    <div className="flex-1">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <Label className="text-white/70 text-sm font-medium mb-2">Имя пользователя</Label>
                                <div className="flex gap-4 items-center max-sm:gap-2">
                                    <Input
                                        className="flex-1 max-w-[550px] h-[40px] border-1 border-primary-900/30 hover:border-primary-900
                                            hover:bg-primary-300/30 p-3 text-start rounded-lg text-white 
                                            outline-none transition-all duration-300 max-sm:text-sm"
                                        type="text"
                                        disabled
                                        value={user?.username || ""}
                                    />
                                    <DialogModal 
                                        title="Изменить имя пользователя"
                                        description="Введите новое имя"
                                        trigger={
                                            <Button
                                                variant="ghost"
                                                className="cursor-pointer flex items-center justify-center p-[10px] bg-primary-900 rounded-lg
                                            hover:bg-indigo-900 transition-all duration-300 max-sm:p-[4px]"
                                            >
                                                <EditIcon className="stroke-gray-400" />
                                            </Button>
                                        }
                                        children={
                                            <UsernameForm
                                                currentUsername={user?.username}
                                            />
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Label className="text-white/70 text-sm font-medium mb-2">E-mail</Label>
                                <div className="flex gap-4 items-center max-sm:gap-2">
                                    <Input
                                        className="flex-1 max-w-[550px] h-[40px] border-1 border-primary-900/30 hover:border-primary-900
                                            hover:bg-primary-300/30 p-3 text-start rounded-lg text-white 
                                            outline-none transition-all duration-300 max-sm:text-sm"
                                        type="email"
                                        disabled
                                        value={user?.email || ""}
                                    />
                                    <DialogModal 
                                        title="Изменить имя пользователя"
                                        description="Введите новое имя"
                                        trigger={
                                            <Button
                                                variant="ghost"
                                                className="cursor-pointer flex items-center justify-center p-[10px] bg-primary-900 rounded-lg
                                            hover:bg-indigo-900 transition-all duration-300 max-sm:p-[4px]"
                                            >
                                                <EditIcon className="stroke-gray-400" />
                                            </Button>
                                        }
                                        children={
                                            <UsernameForm
                                                currentUsername={user?.username}
                                            />
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 space-y-8">
                    <UserSecurity 
                        onEditPassword={() => console.log('')}
                    />
                    <div className="flex flex-col">
                        <label className="text-white/70 text-sm font-medium mb-4">
                            Адрес доставки
                        </label>
                        {/* <ShippingForm /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};