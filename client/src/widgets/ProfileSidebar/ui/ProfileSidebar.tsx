import { Button } from "@/shared/ui";
import { ProfileSidebarSchema } from "../model/types/ProfileSidebarSchema";

export const ProfileSidebar = ({ onSelectTab, user }: ProfileSidebarSchema) => {
    return (
        <div className="flex border-1 rounded-xl border-primary-300 lg:min-h-[750px] mt-5 filters-bg-gradient shadow-lg lg:min-w-[200px] lg:max-w-[250px] w-full">
            <div className="lg:sticky top-30 flex flex-col gap-[10px] mt-[20px] mb-[20px] w-full max-lg:flex-row">
                <Button
                    text="Основное"
                    onClick={() => onSelectTab("main")}
                    className="custom-button w-full"
                />
                <Button
                    text="История заказов"
                    onClick={() => onSelectTab("orders")}
                    className="custom-button w-full"
                />
                {user?.role === "Admin" ? (
                    <Button
                        className="custom-button w-full"
                        text="Админ панель"
                        onClick={() => onSelectTab("admin")}
                    />
                ) : null}
            </div>
        </div>
    );
};
