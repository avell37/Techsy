import { Button } from "@/shared/ui";
import { EditIcon } from "lucide-react";

interface UserSecurityProps {
    onEditPassword: () => void;
}

export const UserSecurity = ({
    onEditPassword
}: UserSecurityProps) => {
    return (
        <div className="p-6 border-1 border-primary-900/30 rounded-xl bg-primary-300/20">
            <div className="flex items-center justify-between security-responsive">
                <div>
                    <h3 className="text-white text-lg font-medium mb-2 max-md:text-sm">
                        Безопасность аккаунта
                    </h3>
                    <p className="text-white/70 text-sm max-md:text-xs">
                        Рекомендуется регулярно менять пароль
                        для обеспечения безопасности вашего
                        аккаунта
                    </p>
                </div>
                <Button
                    variant="ghost"
                    onClick={onEditPassword}
                    className="ml-6 px-6 py-3 bg-primary-900 hover:bg-indigo-900 rounded-lg text-white font-medium 
                    transition-all duration-300 flex items-center gap-2 max-md:px-3 max-md:py-2 max-md:text-xs max-md:ml-0"
                >
                    <EditIcon className="stroke-gray-400" />
                    Сменить пароль
                </Button>
            </div>
        </div>
    )
}
