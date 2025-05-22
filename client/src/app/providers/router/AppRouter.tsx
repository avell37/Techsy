import { Routes, Route, Navigate } from "react-router-dom";
import { adminRoutes, authRoutes, publicRoutes } from "@/app/config/routes";
import { ErrorPage } from "@pages/ErrorPage/ErrorPage";
import { useAppSelector } from "@/shared/hooks";
import { Spinner } from "@/shared/assets";
import Cookies from "js-cookie";
import { LOGIN_ROUTE, SHOP_ROUTE } from "@/shared/config/consts";

export const AppRouter = () => {
    const { currentUser } = useAppSelector((state) => state.userReducer);
    const token = Cookies.get("token");

    if (token && !currentUser) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner width="100px" height="100px" />
            </div>
        );
    }

    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}

            {currentUser &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}

            {currentUser?.role === "Admin" &&
                adminRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}

            <Route
                path="/"
                element={
                    currentUser ? (
                        <Navigate to={SHOP_ROUTE} />
                    ) : (
                        <Navigate to={LOGIN_ROUTE} />
                    )
                }
            />

            <Route path="/404" element={<ErrorPage />} />

            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
};
