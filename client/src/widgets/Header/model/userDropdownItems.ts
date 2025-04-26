import { PROFILE_ROUTE, BASKET_ROUTE, SHOP_ROUTE } from "@/shared/config/consts";
import Cookies from "js-cookie";
import { NavigateFunction } from "react-router-dom";

export const userDropdownItems = (navigate: NavigateFunction) => [
    {
        text: "Профиль",
        onClick: () => navigate(PROFILE_ROUTE),
    },
    {
        text: "Корзина",
        onClick: () => navigate(BASKET_ROUTE),
    },
    {
        text: "Выйти",
        onClick: () => {
            Cookies.remove('token');
            navigate(SHOP_ROUTE)
        },
    },
]

