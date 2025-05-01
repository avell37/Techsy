import { AppDispatch } from "@/app/providers/store/store";
import { logout } from "@/entities/User";
import { PROFILE_ROUTE, BASKET_ROUTE, SHOP_ROUTE, FAVORITES_ROUTE } from "@/shared/config/consts";
import Cookies from "js-cookie";
import { NavigateFunction } from "react-router-dom";

export const userDropdownItems = (navigate: NavigateFunction, dispatch: AppDispatch) => [
    {
        text: "Профиль",
        onClick: () => navigate(PROFILE_ROUTE),
    },
    {
        text: "Избранное",
        onClick: () => navigate(FAVORITES_ROUTE),
    },
    {
        text: "Корзина",
        onClick: () => navigate(BASKET_ROUTE),
    },
    {
        text: "Выйти",
        onClick: () => {
            Cookies.remove('token');
            dispatch(logout())
            navigate(SHOP_ROUTE)
        },
    },
]

