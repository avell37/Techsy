import { Container } from "@/shared/ui";
import { OrderHistoryCard } from "./OrderHistoryCard";
import { IOrder } from "@/shared/types/IOrder";
import { OrderDetails } from "./OrderDetails";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/shared/hooks";

export const OrderHistory = ({ orders }: { orders: IOrder[] }) => {
    const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
    const { shipping } = useAppSelector((state) => state.shippingReducer);
    const orderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (orders && orders.length > 0) {
            setSelectedOrder(orders[0]);
        }
    }, [orders])

    const handleOrderClick = (order: IOrder) => {
        setSelectedOrder(order);
        const rect = orderRef.current?.getBoundingClientRect();
        if (rect) {
            const top = window.scrollY + rect.top - 150;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }

    return (
        <Container>
            <div className="flex gap-[30px] w-full p-8 border-1 border-[#5120B8]/30 rounded-xl filters-bg-gradient shadow-lg mt-5 items-start">
                <div className="flex flex-col gap-[30px] w-[50%] ">
                    {orders?.map((order) => (
                        <div key={order.id} onClick={() => handleOrderClick(order)} className="cursor-pointer rounded-xl border border-[#5120B8]/30 font-bold p-4">
                            <OrderHistoryCard order={order} />
                        </div>
                    ))}
                </div>
                <div
                    ref={orderRef}
                    className="w-[50%] p-4 border-1 border-[#5120B8]/30 rounded-xl filters-bg-gradient shadow-lg">
                    {selectedOrder && <OrderDetails order={selectedOrder} shipping={shipping} />}
                </div>
            </div>
        </Container >
    );
};
