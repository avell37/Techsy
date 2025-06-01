import { PROFILE_ROUTE, BASKET_ROUTE, SHOP_ROUTE, FAVORITES_ROUTE } from "@/shared/config/consts";
import { HeaderSchema } from "../model/types/HeaderSchema";

export const userDropdownItems = ({navigate, userLogout}: HeaderSchema) => [
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
        onClick: () => userLogout(SHOP_ROUTE),
    },
]

