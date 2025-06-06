import { OrderHistoryCard } from "./OrderHistoryCard";

export const OrderHistory = () => {
    return (
        <div>
            <div className="flex flex-col gap-[20px]">
                <OrderHistoryCard />
                <OrderHistoryCard />
                <OrderHistoryCard />
            </div>
        </div>
    );
};
