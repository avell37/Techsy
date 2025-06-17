import { Container } from "@/shared/ui";
import { OrderHistoryCard } from "./OrderHistoryCard";
import { IOrder } from "@/shared/types/IOrder";

export const OrderHistory = ({ orders }: { orders: IOrder[] }) => {
    return (
        <Container>
            <div className="w-full p-8 border-1 border-[#5120B8]/30 rounded-xl filters-bg-gradient shadow-lg mt-5">
                <div className="flex flex-col gap-[30px]">
                    {orders?.map((order) => (
                        <OrderHistoryCard
                            key={order?.id}
                            order={order} />
                    ))}
                </div>
            </div>
        </Container>
    );
};
