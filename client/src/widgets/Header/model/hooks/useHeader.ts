import { userSelector } from "@/entities/User";
import { LOGIN_ROUTE } from "@/shared/config/consts";
import { useActions, useAppSelector } from "@/shared/hooks";
import { getToken, removeToken } from "@/shared/lib";
import { useNavigate } from "react-router-dom";
import { getUserDropdownItems } from "../lib/getUserDropdownItems";

export const useHeader = () => {
    const navigate = useNavigate();
    const userIsAuth = getToken("token");
    const currentUser = useAppSelector(userSelector.currentUser);
    const picture = currentUser?.picture;
    const { logout } = useActions();

    const userLogout = (route: string) => {
        removeToken("token");
        logout();
        navigate(route);
    };

    const handleLogin = () => navigate(LOGIN_ROUTE);
    const userDropdownItems = getUserDropdownItems(navigate, userLogout);

    return {
        currentUser,
        userIsAuth,
        picture,
        userDropdownItems,
        handleLogin,
    };
};
