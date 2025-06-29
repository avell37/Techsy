import { ProfileSidebar } from "@/widgets/ProfileSidebar/ui/ProfileSidebar";
import { useState } from "react";
import { OrderHistory, ordersSelector, UserProfile, userSelector } from "@/entities";
import { Container } from "@/shared/ui";
import { useAppSelector } from "@/shared/hooks";
import { AdminPanel } from "@/features/AdminPanel";

const ProfilePage = () => {
    const user = useAppSelector(userSelector.currentUser);
    const orders = useAppSelector(ordersSelector.orders);
    const [activeTab, setActiveTab] = useState("profile");

    const renderContent = () => {
        switch (activeTab) {
            case "main":
                return (
                    <UserProfile
                        user={user}
                    />
                );
            case "orders":
                return <OrderHistory orders={orders} />;
            case "admin":
                return <AdminPanel />;
            default:
                return (
                    <UserProfile
                        user={user}
                    />
                );
        }
    };

    return (
        <Container>
            <div className="flex h-full">
                <ProfileSidebar onSelectTab={setActiveTab} user={user} />
                <div className="flex-1 pl-10">{renderContent()}</div>
            </div>
        </Container>
    );
};

export default ProfilePage;
