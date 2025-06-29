import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "@/shared/lib";
import { useAppSelector, useActions } from "@/shared/hooks";
import { HeaderView } from "./HeaderView";
import { userSelector } from "@/entities";

export const Header = () => {
    const navigate = useNavigate();
    const userIsAuth = getToken('token');
    const currentUser = useAppSelector(userSelector.currentUser);
    const picture = currentUser?.picture;
    const { logout, clearFavorite } = useActions();

    const userLogout = (route: string) => {
        removeToken('token');
        logout();
        clearFavorite();
        navigate(route);
    };

    return (
        <HeaderView
            navigate={navigate}
            picture={picture}
            userIsAuth={userIsAuth}
            userLogout={userLogout}
        />
    );
};
