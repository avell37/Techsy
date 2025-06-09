import { Registration } from "@/features/Registration";
import { Login } from "@/features/Login";
import { useLocation } from "react-router-dom";
import { LOGIN_ROUTE } from "@/shared/config/consts";

const AuthPage = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <div className="flex flex-col justify-center items-center max-sm:flex-col bg-base-gradient h-full ">
            {isLogin ? <Login /> : <Registration />}
        </div>
    );
};

export default AuthPage;
