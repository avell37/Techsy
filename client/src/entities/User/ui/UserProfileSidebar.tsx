import { Button } from "@/shared/ui"
import { UserSidebarSchema } from "../types/UserSidebarSchema"

export const UserProfileSidebar = ({ user, onSelectTab }: UserSidebarSchema) => {
    return (
        <>
            <Button
                variant="ghost"
                className="custom-button w-full"
                onClick={() => onSelectTab("main")}
            >
                Основное
            </Button>
            <Button
                variant="ghost"
                className="custom-button w-full"
                onClick={() => onSelectTab("orders")}
            >
                История заказов
            </Button>
            {user?.role === 'Admin' ? (
                <Button
                    variant="ghost"
                    className="custom-button w-full"
                    onClick={() => onSelectTab("store")}
                >
                    Управление магазином
                </Button>
            ) : null}
        </>
    )
}
