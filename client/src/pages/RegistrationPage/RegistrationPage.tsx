import { Registration } from "@/features/Registration/Registration"
import { Welcome } from "@/shared/ui/welcome/Welcome"

export const RegistrationPage = () => {
    return (
        <div className="flex">
            <Welcome />
            <Registration />
        </div>
    )
}
