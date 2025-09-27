import { PROFILE_ROUTE, BASKET_ROUTE, SHOP_ROUTE, FAVORITES_ROUTE } from "@/shared/config/consts";
import { IDropdownItem } from "@/shared/types";
import { NavigateFunction } from "react-router-dom";

export const getUserDropdownItems = (
    navigate: NavigateFunction,
    userLogout: (route: string) => void
): IDropdownItem[] => [
    {
        text: "Профиль",
        route: PROFILE_ROUTE,
        onClick: () => navigate(PROFILE_ROUTE),
    },
    {
        text: "Избранное",
        route: FAVORITES_ROUTE,
        onClick: () => navigate(FAVORITES_ROUTE),
    },
    {
        text: "Корзина",
        route: BASKET_ROUTE,
        onClick: () => navigate(BASKET_ROUTE),
    },
    {
        text: "Выйти",
        onClick: () => userLogout(SHOP_ROUTE),
    },
]
