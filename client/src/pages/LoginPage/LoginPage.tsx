import { Welcome } from "@/shared/ui/welcome/Welcome"
import { Login } from "@/features/Login/Login"

export const LoginPage = () => {
    return (
        <div className="flex">
            <Welcome />
            <Login />
        </div>
    )
}
