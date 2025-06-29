import {
    BASKET_ROUTE, CHECKOUT_ROUTE, DEVICE_ROUTE,
    ERROR_ROUTE,
    FAVORITES_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE,
    REGISTRATION_ROUTE, SHOP_ROUTE
} from "@/shared/config/consts";
import { BasketPage } from "@/pages/BasketPage/BasketPage.lazy";
import { AuthPage } from "@/pages/AuthPage/AuthPage.lazy";
import { DevicePage } from "@/pages/DevicePage/ui/DevicePage.lazy";
import { ShopPage } from "@/pages/ShopPage/ShopPage.lazy";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage.lazy";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage.lazy";
import { FavoritesPage } from "@/pages/FavoritesPage/FavoritesPage.lazy";
import { CheckoutPage } from "@/pages/CheckoutPage/ui/CheckoutPage.lazy";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Layout } from "@/widgets/Layout/ui/Layout";

export const routes = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <ShopPage />,
                path: SHOP_ROUTE
            },
            {
                element: <AuthPage />,
                path: LOGIN_ROUTE
            },
            {
                element: <AuthPage />,
                path: REGISTRATION_ROUTE
            },
            {
                element:
                    <ProtectedRoute>
                        <BasketPage />
                    </ProtectedRoute>,
                path: BASKET_ROUTE
            },
            {
                element: <DevicePage />,
                path: DEVICE_ROUTE + "/:id"
            },
            {
                element:
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>,
                path: PROFILE_ROUTE
            },
            {
                element:
                    <ProtectedRoute>
                        <FavoritesPage />
                    </ProtectedRoute>,
                path: FAVORITES_ROUTE
            },
            {
                element:
                    <ProtectedRoute>
                        <CheckoutPage />
                    </ProtectedRoute>,
                path: CHECKOUT_ROUTE
            }
        ]
    },
    {
        path: ERROR_ROUTE,
        element: <ErrorPage />
    },
    {
        path: "*",
        element: <Navigate to={ERROR_ROUTE} replace />
    }
])