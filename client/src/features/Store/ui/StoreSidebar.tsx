import { Button } from "@/shared/ui"

interface StoreSidebarProps {
    onSelectTab: (tab: "types" | "brands" | "devices" | "reviews") => void;
}

export const StoreSidebar = ({onSelectTab}: StoreSidebarProps) => {
    return (
        <nav className="flex flex-col gap-3">
            <div className="text-white px-4 font-bold">Ваш магазин</div>
            <Button
                variant="ghost"
                className="flex items-center apply-button-without-bg w-full"
                onClick={() => onSelectTab("types")}
            >
                Типы
            </Button>
            <Button
                variant="ghost"
                className="flex items-center apply-button-without-bg w-full"
                onClick={() => onSelectTab("brands")}
            >
                Бренды
            </Button>
            <Button
                variant="ghost"
                className="flex items-center apply-button-without-bg w-full"
                onClick={() => onSelectTab("devices")}
            >
                Товары
            </Button>
            <Button
                variant="ghost"
                className="flex items-center apply-button-without-bg w-full"
                onClick={() => onSelectTab("reviews")}
            >
                Отзывы
            </Button>
        </nav>
    )
}
