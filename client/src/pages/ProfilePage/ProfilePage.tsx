import { Header } from "@/widgets/Header";
import { UserProfile } from "@/features/UserProfile";
import { ProfileSidebar } from "@/widgets/ProfileSidebar/ui/ProfileSidebar";
import { useEffect, useState } from "react";
import { OrderHistory } from "@/features/OrderHistory/ui/OrderHistory";
import { Container } from "@/shared/ui";
import { useAppSelector } from "@/shared/hooks";

const ProfilePage = () => {
    const user = useAppSelector((state) => state.userReducer.currentUser);

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        role: "",
    });
    const [editedData, setEditedData] = useState({
        username: "",
        email: "",
    });

    const [activeTab, setActiveTab] = useState("profile");

    useEffect(() => {
        if (user) {
            setUserData({
                username: user?.username,
                email: user?.email,
                role: user?.role,
            });
            setEditedData({
                username: user?.username,
                email: user?.email,
            });
        }
    }, [user]);

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <UserProfile
                        user={user}
                        editedData={editedData}
                        setEditedData={setEditedData}
                        userData={userData}
                        setUserData={setUserData}
                    />
                );
            case "security":
                return <div>Security Settings</div>;
            case "orders":
                return <OrderHistory />;
            default:
                return (
                    <UserProfile
                        user={user}
                        editedData={editedData}
                        setEditedData={setEditedData}
                        userData={userData}
                        setUserData={setUserData}
                    />
                );
        }
    };

    return (
        <div className="flex flex-col h-full w-full">
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
