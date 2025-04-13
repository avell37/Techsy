import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "@/app/config/routes";
import { REGISTRATION_ROUTE, SHOP_ROUTE } from "@/shared/config/consts";
import Cookies from "js-cookie";
import { ErrorPage } from "@/pages/ErrorPage/ui/ErrorPage";

export const AppRouter = () => {
    const token = Cookies.get("token");

    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}

            {token &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}

            {token ? (
                <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
            ) : (
                <Route
                    path="*"
                    element={<Navigate to={REGISTRATION_ROUTE} />}
                />
            )}

            <Route path="/404" element={<ErrorPage />} />
        </Routes>
    );
};
