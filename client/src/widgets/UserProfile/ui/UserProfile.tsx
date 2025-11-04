import { Heart, ShoppingCart, UserStar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FAVORITES_ROUTE, ORDERS_ROUTE, REVIEWS_ROUTE } from "@/shared/config/consts";
import { ShippingForm } from "@/entities/Shipping/ui/ShippingForm";
import { UserAvatar, UserCard } from "@/entities/User";
import { useProfile } from "../model/hooks/useProfile";

export const UserProfile = () => {
    const { user, fileInputRef, handleUpload } = useProfile();
    const navigate = useNavigate(); 

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
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white">Добро пожаловать в личный кабинет, {user?.username}!</h1>
                    </div>
                </div>
                <div className="flex gap-4 mt-6 max-sm:flex-wrap">
                    <UserCard
                        title="Избранное"
                        subtitle={`${user?.favorites.length ? user?.favorites?.length : '0'} товаров`}
                        onClick={() => navigate(FAVORITES_ROUTE)}
                        icon={
                            <Heart className="fill-indigo-900 stroke-indigo-900" />
                        }
                    />
                    <UserCard
                        title="Покупки"
                        subtitle="Смотреть"
                        onClick={() => navigate(ORDERS_ROUTE)}
                        icon={
                            <ShoppingCart className="fill-indigo-900 stroke-indigo-900" />
                        }
                    />
                    <UserCard
                        title="Оценки"
                        subtitle={`Оценено ${user?.reviews?.length ? user?.reviews?.length : '0'} товаров`}
                        onClick={() => navigate(REVIEWS_ROUTE)}
                        icon={
                            <UserStar className="fill-indigo-900 stroke-indigo-900" />
                        }
                    />
                </div>
                <div className="flex flex-col pt-8">
                    <label className="text-white/70 text-sm font-medium mb-4">
                        Адрес доставки
                    </label>
                    <ShippingForm />
                </div>
            </div>
        </div>
    );
};