import { Button } from "@/shared/ui";
import { ProfileSidebarSchema } from "../model/types/ProfileSidebarSchema";
import { ADMIN_ROUTE } from "@/shared/config/consts";
import { useNavigate } from "react-router-dom";

export const ProfileSidebar = ({ onSelectTab, user }: ProfileSidebarSchema) => {
    const navigate = useNavigate();

    return (
        <div className="flex border-1 rounded-xl border-[#5120B8]/30 h-screen mt-5 filters-bg-gradient shadow-lg">
            <div className="sticky top-30 flex flex-col gap-[10px] mt-[20px] mb-[20px]">
                <Button
                    text="Профиль"
                    onClick={() => onSelectTab("profile")}
                    className="w-[250px] h-[50px] text-center text-white border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238] focus:border-[#4F45E4] transition cursor-pointer"
                />
                <Button
                    text="Безопасность"
                    onClick={() => onSelectTab("security")}
                    className="w-[250px] h-[50px] text-center text-white border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238] focus:border-[#4F45E4] transition cursor-pointer"
                />
                <Button
                    text="История заказов"
                    onClick={() => onSelectTab("orders")}
                    className="w-[250px] h-[50px] text-center text-white border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238] focus:border-[#4F45E4] transition cursor-pointer"
                />
                {user?.role === "Admin" ? (
                    <Button
                        className="w-[250px] h-[50px] text-center text-white border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238] focus:border-[#4F45E4] transition cursor-pointer"
                        text="Админ панель"
                        onClick={() => navigate(ADMIN_ROUTE)}
                    />
                ) : null}
            </div>
        </div>
    );
};
