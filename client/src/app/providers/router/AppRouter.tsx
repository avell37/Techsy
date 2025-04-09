import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "@/app/config/routes";
import { REGISTRATION_ROUTE, SHOP_ROUTE } from "@/shared/config/consts";
import Cookies from "js-cookie";

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

            <Route
                path="*"
                element={
                    <Navigate
                        to={token ? SHOP_ROUTE : REGISTRATION_ROUTE}
                        replace
                    />
                }
            />
        </Routes>
    );
};
