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
import { StorePage } from "@/pages/StorePage/ui/StorePage.lazy";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { StoreRoute } from "./StoreRoute";
import { TypesPage } from "@/pages/StorePage/ui/TypesPage/TypesPage.lazy";
import { DevicesPage } from "@/pages/StorePage/ui/DevicesPage/DevicesPage.lazy";
import { TypeAddForm, TypeEditForm } from "@/features/Store/types";
import { BrandAddForm, BrandEditForm } from "@/features/Store/brands";
import { DeviceAddForm, DeviceEditForm } from "@/features/Store/devices";
import { BrandsPage } from "@/pages/StorePage/ui/BrandsPage/BrandsPage.lazy";
import { ReviewsPage } from "@/pages/StorePage/ui/ReviewsPage/ReviewsPage.lazy";
import { OrderHistory } from "@/features/Order";
import { UserReviews } from "@/features/ManageReview";
import { Layout, UserProfile } from "@/widgets";
import { UserSecurity } from "@/features/ChangeUserData";
import { CheckoutPage } from "@/pages/CheckoutPage/CheckoutPage.lazy";

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
                    { path: 'favorites', element: <FavoritesPage />},
                    { path: 'reviews', element: <UserReviews /> }
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
                    { path: "reviews",
                        children: [
                            { index: true, element: <ReviewsPage /> },
                        ]
                    },
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