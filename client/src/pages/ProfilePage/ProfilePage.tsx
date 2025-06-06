import { Header } from "@/widgets/Header";
import { UserProfile } from "@/features/UserProfile";
import { ProfileSidebar } from "@/widgets/ProfileSidebar/ui/ProfileSidebar";
import { useState } from "react";
import { OrderHistory } from "@/features/OrderHistory/ui/OrderHistory";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState("profile");

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return <UserProfile />;
            case "security":
                return <div>Security Settings</div>;
            case "orders":
                return <OrderHistory />;
            default:
                return <UserProfile />;
        }
    };

    return (
        <div className="flex flex-col h-full">
            <Header />
            <div className="flex h-full">
                <ProfileSidebar onSelectTab={setActiveTab} />
                <div className="flex-1 p-4">{renderContent()}</div>
            </div>
        </div>
    );
};

export default ProfilePage;
