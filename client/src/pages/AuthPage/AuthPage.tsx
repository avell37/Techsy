import { Registration } from "@/features/Registration";
import { Login } from "@/features/Login";
import { Welcome } from "@/shared/ui";
import { useLocation } from "react-router-dom";
import { LOGIN_ROUTE } from "@/shared/config/consts";

const AuthPage = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <div className="flex">
            <Welcome />
            {isLogin ? <Login /> : <Registration />}
        </div>
    );
};

export default AuthPage;
