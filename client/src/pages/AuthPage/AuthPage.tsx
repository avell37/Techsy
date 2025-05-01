import { Registration } from "@/features/Registration/Registration";
import { Login } from "@/features/Login/Login";
import { Welcome } from "@/shared/ui";
import { useLocation } from "react-router-dom";
import { LOGIN_ROUTE } from "@/shared/config/consts";

export const AuthPage = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <div className="flex">
            <Welcome />
            {isLogin ? <Login /> : <Registration />}
        </div>
    );
};
