import { useProfile } from "../../model/hooks/useProfile";
import { Button, Card, CardContent, CardHeader, Input, Label } from "@/shared/ui";
import { DialogModal } from "@/shared/ui/DialogModal/DialogModal";
import { UserAvatar } from "./UserAvatar";
import { UserSecurity } from "./UserSecurity";
import { EditIcon, Heart } from "lucide-react";
import { UsernameForm } from "@/entities/User/ui/UserForms/UsernameForm";
import { ShippingForm } from "@/entities/Shipping/ui/ShippingForm";
import { useChangeUserData } from "../../model/hooks/useChangeUserData";
import { EmailForm } from "../UserForms/EmailForm";

export const UserProfile = () => {
    const { user, fileInputRef, handleUpload } = useProfile();
    const { usernameForm, emailForm, onChangeUsername, onChangeEmail } = useChangeUserData(user);

    return (
        <div className="flex w-full min-h-fit mt-5">
            <div className="flex flex-col w-full p-8 rounded-xl bg-gradient shadow-lg">
                <div className="flex flex-col md:flex-row gap-12">
                    <UserAvatar
                        username={user?.username}
                        picture={user?.picture}
                        fileInputRef={fileInputRef}
                        onUpload={handleUpload}
                    />
                    <h1 className="text-white">Добро пожаловать в личный кабинет, {user?.username}!</h1>
                </div>
                <div className="flex gap-4 mt-6">
                    <Card 
                    className="flex justify-between px-4 items-center max-w-[300px] h-[100px] w-full border border-indigo-900 rounded-xl 
                    hover:border-primary-900 hover:bg-primary-300/30 transition-all bg-gradient text-white">
                        <div>
                            <div>Избранное</div>
                            <span className="text-sm text-gray-400">7 товаров</span>
                        </div>
                        <Heart className="fill-indigo-900 stroke-indigo-900" />
                    </Card>
                    <Card 
                    className="flex justify-between px-4 items-center max-w-[300px] h-[100px] w-full border border-indigo-900 rounded-xl 
                    hover:border-primary-900 hover:bg-primary-300/30 transition-all bg-gradient text-white">
                        <div>
                            <div>Покупки</div>
                            <span className="text-sm text-gray-400">Смотреть</span>
                        </div>
                        <Heart className="fill-indigo-900 stroke-indigo-900" />
                    </Card>
                    <Card 
                    className="flex justify-between px-4 items-center max-w-[300px] h-[100px] w-full border border-indigo-900 rounded-xl 
                    hover:border-primary-900 hover:bg-primary-300/30 transition-all bg-gradient text-white">
                        <div>
                            <div>Оценки</div>
                            <span className="text-sm text-gray-400">Оценено 7 товаров</span>
                        </div>
                        <Heart className="fill-indigo-900 stroke-indigo-900" />
                    </Card>
                </div>
            </div>
        </div>
    );
};
{/* <div className="flex flex-col">
                        <label className="text-white/70 text-sm font-medium mb-4">
                            Адрес доставки
                        </label>
                        <ShippingForm />
                    </div> */}