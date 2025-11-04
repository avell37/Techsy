import { LOGIN_ROUTE } from "@/shared/config/consts";
import { useLocation } from "react-router-dom";
import { Registration } from "./forms/Registration";
import { Login } from "./forms/Login";

export const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient/30 p-4">
            {isLogin ? <Login /> : <Registration />}
        </div>
    );
}
