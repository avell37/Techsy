import { StoreSidebar } from "@/widgets/Sidebar/ui/StoreSidebar";
import { STORE_MANAGEMENT_ROUTE } from "@/shared/config/consts";
import { Container } from "@/shared/ui";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

const StorePage = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <div className="flex w-full h-full gap-10 max-lg:gap-2 max-lg:flex-col">
                <Sidebar>
                    <StoreSidebar 
                        onSelectTab={(tab) => navigate(`${STORE_MANAGEMENT_ROUTE}/${tab}`)}
                    />
                </Sidebar>
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </Container>
    )
}

export default StorePage;