import { Header } from "@/widgets/Header/Header"
import { Profile } from "@/features/Profile/Profile"

export const ProfilePage: React.FC = () => {
    return (
        <div className="flex flex-col gap-[50px]">
            <Header />
            <Profile />
        </div>
    )
}
