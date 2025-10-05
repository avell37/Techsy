import {
    BASKET_ROUTE, CHECKOUT_ROUTE, DEVICE_ROUTE,
    ERROR_ROUTE,
    FAVORITES_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE,
    REGISTRATION_ROUTE, SHOP_ROUTE,
    STORE_MANAGEMENT_ROUTE
} from "@/shared/config/consts";
import { BasketPage } from "@/pages/BasketPage/BasketPage.lazy";
import { AuthPage } from "@/pages/AuthPage/AuthPage.lazy";
import { DevicePage } from "@/pages/DevicePage/DevicePage.lazy";
import { ShopPage } from "@/pages/ShopPage/ShopPage.lazy";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage.lazy";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage.lazy";
import { FavoritesPage } from "@/pages/FavoritesPage/FavoritesPage.lazy";
import { CheckoutPage } from "@/pages/CheckoutPage/ui/CheckoutPage.lazy";
import { StorePage } from "@/pages/StorePage/ui/StorePage.lazy";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Layout } from "@/widgets/Layout/ui/Layout";
import { OrderHistory, UserProfile } from "@/entities";
import { StoreRoute } from "./StoreRoute";
import { TypeEditForm } from "@/entities/Type/ui/TypeForms/TypeEditForm";
import { TypeAddForm } from "@/entities/Type/ui/TypeForms/TypeAddForm";
import { TypesPage } from "@/pages/StorePage/ui/TypesPage/TypesPage.lazy";
import BrandsPage from "@/pages/StorePage/ui/BrandsPage/BrandsPage";
import { BrandEditForm } from "@/entities/Brand/ui/BrandForms/BrandEditForm";
import { BrandAddForm } from "@/entities/Brand/ui/BrandForms/BrandAddForm";
import { DevicesPage } from "@/pages/StorePage/ui/DevicesPage/DevicesPage";
import { DeviceAddForm } from "@/entities/Device/ui/DeviceForms/DeviceAddForm";
import { DeviceEditForm } from "@/entities/Device/ui/DeviceForms/DeviceEditForm";
import { UserSecurity } from "@/entities/User/ui/UserProfile/UserSecurity";

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
                path: PROFILE_ROUTE,
                children: [
                    {index: true, element: <UserProfile />},
                    { path: "main", element: <UserProfile /> },
                    { path: "orders", element: <OrderHistory /> },
                    { path: "security", element: <UserSecurity /> },
                ]
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
            },
            {
                element:
                    <ProtectedRoute>
                        <StoreRoute>
                            <StorePage />
                        </StoreRoute>
                    </ProtectedRoute>,
                path: STORE_MANAGEMENT_ROUTE,
                children: [
                    {index: true, element: <TypesPage />},
                    { path: "types",
                        children: [
                            { index: true, element: <TypesPage /> },
                            { path: ":id/edit", element: <TypeEditForm /> },
                            { path: "add", element: <TypeAddForm /> }
                        ]},
                    { path: "brands",
                        children: [
                            { index: true, element: <BrandsPage /> },
                            { path: ":id/edit", element: <BrandEditForm /> },
                            { path: "add", element: <BrandAddForm /> }
                        ]},
                    { path: "devices",
                        children: [
                            { index: true, element: <DevicesPage /> },
                            { path: ":id/edit", element: <DeviceEditForm /> },
                            { path: "add", element: <DeviceAddForm /> }
                        ]},
                    { path: "reviews", element: <OrderHistory /> },
                ]
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