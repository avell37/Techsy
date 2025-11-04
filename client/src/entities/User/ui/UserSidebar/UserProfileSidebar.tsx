import { Button, Divider } from "@/shared/ui"
import type { UserSidebarSchema } from "../../model/types/UserSidebarSchema"

export const UserProfileSidebar = ({ user, onSelectTab }: UserSidebarSchema) => {
    return (
        <nav>
            <div className="flex flex-col gap-2">
                <div className="text-white px-4 font-bold">Личная информация</div>
                <Button
                    variant="ghost"
                    className="apply-button-without-bg w-full flex justify-start items-center"
                    onClick={() => onSelectTab("main")}
                >
                    Главная
                </Button>
                <Button
                    variant="ghost"
                    className="apply-button-without-bg w-full flex justify-start items-center"
                    onClick={() => onSelectTab("security")}
                >
                    Безопасность
                </Button>
            </div>
            <Divider variant="h-[2px] my-3" />
            <div className="flex flex-col gap-2">
                <div className="text-white px-4 font-bold">Заказы</div>
                <Button
                    variant="ghost"
                    className="apply-button-without-bg w-full flex justify-start items-center"
                    onClick={() => onSelectTab("reviews")}
                >
                    Ваши отзывы
                </Button>
                <Button
                    variant="ghost"
                    className="apply-button-without-bg w-full flex justify-start items-center"
                    onClick={() => onSelectTab("favorites")}
                >
                    Ваши избранные
                </Button>
                <Button
                    variant="ghost"
                    className="apply-button-without-bg w-full flex justify-start items-center"
                    onClick={() => onSelectTab("orders")}
                >
                    Ваши покупки
                </Button>
            </div>
            {user?.role === 'Admin' ? (
                <div className="flex flex-col gap-3">
                    <Divider variant="h-[2px] my-3" />
                    <div className="text-white px-4 font-bold">Управление магазином</div>
                        <Button
                        variant="ghost"
                        className="apply-button-without-bg w-full flex justify-start items-center"
                        onClick={() => onSelectTab("store")}
                    >
                        Редактировать магазин
                    </Button>
                </div>
            ) : null}
        </nav>
    )
}
