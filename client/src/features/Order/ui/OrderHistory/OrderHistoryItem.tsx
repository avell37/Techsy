import type { IOrder } from "../../model/types/IOrder";
import { OrderHistoryCard } from "./OrderHistoryCard";

interface OrderHistoryItemProps {
    order: IOrder;
    handleOrderClick: (order: IOrder) => void;
}

export const OrderHistoryItem = ({
    order,
    handleOrderClick,
}: OrderHistoryItemProps) => {
    const handleClick = () => handleOrderClick(order);

    return (
        <div
            className="cursor-pointer rounded-xl border border-primary-900/30 font-bold p-4"
            onClick={handleClick}
        >
            <OrderHistoryCard order={order} />
        </div>
    );
};
