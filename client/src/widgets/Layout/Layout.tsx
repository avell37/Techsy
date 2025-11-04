import { matchPath, Outlet, useLocation } from 'react-router-dom'
import clsx from 'clsx';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/shared/config/consts';
import { Header } from '../Header';

const NO_HEADER_PATHS = [
    LOGIN_ROUTE,
    REGISTRATION_ROUTE
]

export const Layout = () => {
    const location = useLocation();

    const hideHeader = NO_HEADER_PATHS.some((path) =>
        matchPath(path, location.pathname))

    return (
        <>
            {!hideHeader && <Header />}
            <main className={clsx(
                hideHeader && "h-full"
            )}>
                <Outlet />
            </main>
        </>
    )
}
