import { Sidebar } from "@/widgets/Sidebar/Sidebar";
import { Container } from "@/shared/ui";
import { Outlet, useNavigate } from "react-router-dom";
import { PROFILE_ROUTE, STORE_MANAGEMENT_ROUTE } from "@/shared/config/consts";
import { UserProfileSidebar } from "@/entities/User/ui/UserSidebar/UserProfileSidebar";
import { useAppSelector } from "@/shared/hooks";
import { userSelector } from "@/entities";

const ProfilePage = () => {
    const user = useAppSelector(userSelector.currentUser);
    const navigate = useNavigate();

    return (
        <Container>
            <div className="flex w-full h-full gap-10 max-lg:gap-2 max-lg:flex-col">
                <Sidebar>
                    <UserProfileSidebar
                        user={user}
                        onSelectTab={(tab) => {
                            if (tab === "store" && user?.role === 'Admin') {
                                navigate(STORE_MANAGEMENT_ROUTE)
                            } else {
                                navigate(`${PROFILE_ROUTE}/${tab}`)
                            }
                        }}  
                    />
                </Sidebar>
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </Container>
    );
};

export default ProfilePage;
