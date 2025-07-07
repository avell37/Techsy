import { Header } from '../../Header'
import { matchPath, Outlet, useLocation } from 'react-router-dom'
import { NO_HEADER_PATHS } from '../utils/noHeaderPaths';
import clsx from 'clsx';

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
