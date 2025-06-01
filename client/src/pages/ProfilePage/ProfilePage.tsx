import { Header } from "@/widgets/Header";
import { UserProfile } from "@/features/UserProfile";
import { ProfileSidebar } from "@/widgets/ProfileSidebar/ui/ProfileSidebar";

export const ProfilePage: React.FC = () => {
    return (
        <div className="flex flex-col h-full">
            <Header />
            <div className="flex h-full">
                <ProfileSidebar />
                <UserProfile />
            </div>
        </div>
    );
};
