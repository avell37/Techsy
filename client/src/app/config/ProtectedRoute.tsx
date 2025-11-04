import { userSelector } from "@/entities";
import { LOGIN_ROUTE } from "@/shared/config/consts";
import { useAppSelector } from "@/shared/hooks";
import { getToken } from "@/shared/lib";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const currentUser = useAppSelector(userSelector.currentUser);
    const location = useLocation();

    if (!currentUser && !getToken('token')) {
        return <Navigate to={LOGIN_ROUTE} state={{ from: location }} replace />
    }

    return children;
}
