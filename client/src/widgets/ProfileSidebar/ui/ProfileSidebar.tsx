import { Button } from "@/shared/ui";
import { ProfileSidebarSchema } from "../model/types/ProfileSidebarSchema";

export const ProfileSidebar = ({ onSelectTab, user }: ProfileSidebarSchema) => {
    return (
        <div className="flex border-1 rounded-xl border-primary-300 min-h-[750px] mt-5 filters-bg-gradient shadow-lg">
            <div className="sticky top-30 flex flex-col gap-[10px] mt-[20px] mb-[20px]">
                <Button
                    text="Основное"
                    onClick={() => onSelectTab("main")}
                    className="custom-button"
                />
                <Button
                    text="История заказов"
                    onClick={() => onSelectTab("orders")}
                    className="custom-button"
                />
                {user?.role === "Admin" ? (
                    <Button
                        className="custom-button"
                        text="Админ панель"
                        onClick={() => onSelectTab("admin")}
                    />
                ) : null}
            </div>
        </div>
    );
};
