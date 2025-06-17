import { Header } from "@/widgets/Header";
import { ProfileSidebar } from "@/widgets/ProfileSidebar/ui/ProfileSidebar";
import { useState } from "react";
import { OrderHistory, UserProfile } from "@/entities";
import { Container } from "@/shared/ui";
import { useAppSelector } from "@/shared/hooks";
import { AdminPanel } from "@/features/AdminPanel";

const ProfilePage = () => {
    const user = useAppSelector((state) => state.userReducer.currentUser);
    const orders = useAppSelector((state) => state.ordersReducer.orders);
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
        <div className="flex flex-col w-full">
            <Header />
            <Container>
                <div className="flex h-full">
                    <ProfileSidebar onSelectTab={setActiveTab} user={user} />
                    <div className="flex-1 pl-10">{renderContent()}</div>
                </div>
            </Container>
        </div>
    );
};

export default ProfilePage;
