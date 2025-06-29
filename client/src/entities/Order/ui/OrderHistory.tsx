import { Container } from "@/shared/ui";
import { IOrder } from "@/shared/types/IOrder";
import { OrderDetails } from "./OrderDetails";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/shared/hooks";
import { shippingSelector } from "@/entities/Shipping";
import { OrderHistoryItem } from "./OrderHistoryItem";
import { sortedOrders } from "../utils/sortedOrders";

export const OrderHistory = ({ orders }: { orders: IOrder[] }) => {
    const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(orders?.[0] ?? null);
    const shipping = useAppSelector(shippingSelector.shipping);
    const orderRef = useRef<HTMLDivElement>(null);
    const sorted = sortedOrders(orders);

    useEffect(() => {
        if (orders && orders.length > 0) {
            setSelectedOrder(orders[0]);
        } else setSelectedOrder(null);
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
            <div className="flex gap-[30px] w-full p-8 border-1 
            border-primary-900/30 rounded-xl filters-bg-gradient shadow-lg mt-5 items-start">
                {shipping ? (
                    <>
                        <div className="flex flex-col gap-[30px] w-[50%] ">
                            {sorted?.map((order) => (
                                <OrderHistoryItem
                                    key={order.id}
                                    order={order}
                                    handleOrderClick={handleOrderClick}
                                />
                            ))}
                        </div>
                        <div
                            ref={orderRef}
                            className="w-[50%] p-4 border-1 border-primary-900/30 rounded-xl filters-bg-gradient shadow-lg">
                            {selectedOrder && <OrderDetails order={selectedOrder} shipping={shipping} />}
                        </div>
                    </>
                ) : (
                    <div className="w-full">
                        <p className="text-light-purple font-bold text-center">История заказов пуста...</p>
                    </div>
                )}
            </div>
        </Container >
    );
};
