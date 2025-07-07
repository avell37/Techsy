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
            <div className="flex w-full h-full gap-10 max-lg:gap-2 max-lg:flex-col">
                <ProfileSidebar onSelectTab={setActiveTab} user={user} />
                <div className="w-full">{renderContent()}</div>
            </div>
        </Container>
    );
};

export default ProfilePage;
