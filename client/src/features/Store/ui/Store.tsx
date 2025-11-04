import { Container } from '@/shared/ui';
import { Outlet, useNavigate } from 'react-router-dom';
import { STORE_MANAGEMENT_ROUTE } from '@/shared/config/consts';
import { Sidebar } from '@/widgets';
import { StoreSidebar } from './StoreSidebar';

export const Store = () => {
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
