import { AdminPage } from "@pages/AdminPage/ui/AdminPage";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, ERROR_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "@/shared/config/consts";
import { BasketPage } from "@/pages/BasketPage/ui/BasketPage";
import { AuthPage } from "@/pages/AuthPage/ui/AuthPage";
import { DevicePage } from "@/pages/DevicePage/ui/DevicePage";
import { ShopPage } from "@/pages/ShopPage/ui/ShopPage";
import { ErrorPage } from "@/pages/ErrorPage/ui/ErrorPage";
import { ProfilePage } from "@/pages/ProfilePage/ui/ProfilePage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: ShopPage
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: ERROR_ROUTE,
        Component: ErrorPage
    },
]