import {ADMIN_ROUTE, BASKET_ROUTE, CHECKOUT_ROUTE, DEVICE_ROUTE, 
        ERROR_ROUTE, FAVORITES_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, 
        REGISTRATION_ROUTE, SHOP_ROUTE} from "@/shared/config/consts";
import { AdminPage } from "@/pages/AdminPage/AdminPage.lazy";
import { BasketPage } from "@/pages/BasketPage/BasketPage.lazy";
import { AuthPage } from "@/pages/AuthPage/AuthPage.lazy";
import { DevicePage } from "@/pages/DevicePage/ui/DevicePage.lazy";
import { ShopPage } from "@/pages/ShopPage/ShopPage.lazy";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage.lazy";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage.lazy";
import { FavoritesPage } from "@/pages/FavoritesPage/FavoritesPage.lazy";
import { CheckoutPage } from "@/pages/CheckoutPage/CheckoutPage.lazy";

interface RoutesProps {
    path: string,
    Component: React.ComponentType
}

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    }
]

export const authRoutes: RoutesProps[] = [
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
    {
        path: FAVORITES_ROUTE,
        Component: FavoritesPage
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
        path: CHECKOUT_ROUTE,
        Component: CheckoutPage
    },
    {
        path: ERROR_ROUTE,
        Component: ErrorPage
    },
]