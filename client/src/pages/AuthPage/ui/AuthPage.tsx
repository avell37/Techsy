import { Welcome } from "@/shared/ui/welcome/Welcome";
import { Login } from "@/features/Login/Login";
import { Registration } from "@/features/Registration/Registration";

export const AuthPage = () => {
    const userIsAuth = false;

    // if (localStorage.getItem('token')) {

    // }

    return (
        <div className="flex">
            <Welcome />
            {userIsAuth ? <Login /> : <Registration />}
        </div>
    );
};
