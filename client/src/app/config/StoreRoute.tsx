import { userSelector } from "@/entities";
import { ERROR_ROUTE } from "@/shared/config/consts";
import { useAppSelector } from "@/shared/hooks";
import { Navigate } from "react-router-dom";

export const StoreRoute = ({children}: {children: React.ReactNode}) => {
    const user = useAppSelector(userSelector.currentUser);

    if (user) {
        if (user.role !== 'Admin') {
            return <Navigate to={ERROR_ROUTE} replace />
        }
    }

    return children;
}
