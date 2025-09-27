import { Button } from "@/shared/ui"

interface StoreSidebarProps {
    onSelectTab: (tab: "types" | "brands" | "products" | "reviews") => void;
}

export const StoreSidebar = ({onSelectTab}: StoreSidebarProps) => {
    return (
        <>
            <Button
                variant="ghost"
                className="custom-button w-full"
                onClick={() => onSelectTab("types")}
            >
                Типы
            </Button>
            <Button
                variant="ghost"
                className="custom-button w-full"
                onClick={() => onSelectTab("brands")}
            >
                Бренды
            </Button>
            <Button
                variant="ghost"
                className="custom-button w-full"
                onClick={() => onSelectTab("products")}
            >
                Товары
            </Button>
            <Button
                variant="ghost"
                className="custom-button w-full"
                onClick={() => onSelectTab("reviews")}
            >
                Отзывы
            </Button>
        </>
    )
}
