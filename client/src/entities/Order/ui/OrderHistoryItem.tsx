import { IOrder } from '@/shared/types/IOrder'
import { OrderHistoryCard } from './OrderHistoryCard'

interface OrderHistoryItemProps {
    order: IOrder,
    handleOrderClick: (order: IOrder) => void;
}

export const OrderHistoryItem = ({ order, handleOrderClick }: OrderHistoryItemProps) => {
    const handleClick = () => handleOrderClick(order);

    return (
        <div
            key={order.id}
            className="cursor-pointer rounded-xl border border-primary-900/30 font-bold p-4"
            onClick={handleClick}
        >
            <OrderHistoryCard order={order} />
        </div>
    )
}
