import {
    BASKET_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
} from "@/shared/config/consts";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button/Button";
import Cookies from "js-cookie";
import axios from "axios";
import { checkRole } from "@/shared/api/userApi";

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const userIsAuth = Cookies.get("token");

    const logout = () => {
        Cookies.remove("token");
        navigate(LOGIN_ROUTE);
    };

    return (
        <div className="sticky top-0 flex justify-between pl-20 pr-20 w-full items-center bg-[#0F0F1A] p-4 border-b border-[#5120B8]/30 z-[1000] h-[100px]">
            <Button
                onClick={() => navigate(SHOP_ROUTE)}
                className="flex justify-center text-xl text-purple-500 font-bold cursor-pointer"
            >
                techsy
            </Button>
            <div className="flex justify-center gap-[30px]">
                <Button
                    onClick={() => navigate(PROFILE_ROUTE)}
                    className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer"
                >
                    Профиль
                </Button>
                <Button
                    onClick={() => navigate(BASKET_ROUTE)}
                    className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer"
                >
                    Корзина
                </Button>
                {userIsAuth ? (
                    <Button
                        onClick={() => logout()}
                        className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer"
                    >
                        Выйти
                    </Button>
                ) : (
                    <Button
                        onClick={() => navigate(REGISTRATION_ROUTE)}
                        className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer"
                    >
                        Регистрация
                    </Button>
                )}
            </div>
        </div>
    );
};
