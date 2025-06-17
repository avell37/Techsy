import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAppSelector, useAppDispatch } from "@/shared/hooks";
import { HeaderView } from "./HeaderView";
import { logout } from "@/entities";
import { clearFavorite } from "@/entities/Favorites";

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userIsAuth = Cookies.get("token");
    const currentUser = useAppSelector(
        (state) => state.userReducer.currentUser
    );
    const picture = currentUser?.picture;

    const userLogout = (route: string) => {
        Cookies.remove("token");
        dispatch(logout());
        dispatch(clearFavorite());
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
