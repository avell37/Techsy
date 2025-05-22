import { Header } from "@/widgets/Header";
import { UserProfile } from "@/features/UserProfile";

export const ProfilePage: React.FC = () => {
    return (
        <div className="flex flex-col gap-[50px]">
            <Header />
            <UserProfile />
        </div>
    );
};
