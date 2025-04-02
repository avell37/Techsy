import { Welcome } from "@/shared/ui/welcome/Welcome"
import { Login } from "@/features/Login/Login"
import { Registration } from "@/features/Registration/Registration";
import { fetchTypes } from "@/shared/api/deviceApi";

export const AuthPage = () => {
    const userIsAuth = false;

    return (
        <div className="flex">
            <Welcome />
            {userIsAuth ? <Login /> : <Registration />}
        </div>
    )
}
