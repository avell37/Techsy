import { Container } from "@/shared/ui";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/shared/hooks";
import { shippingSelector } from "@/entities/Shipping";
import { ordersSelector } from "../../model/slice/ordersSelector";
import { ArrowLeft } from "lucide-react";
import type { IOrder } from "../../model/types/IOrder";
import { OrderHistoryItem } from "./OrderHistoryItem";

export const OrderHistory = () => {
    const orders = useAppSelector(ordersSelector.orders);
    const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(
        orders?.[0] ?? null
    );
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const shipping = useAppSelector(shippingSelector.shipping);
    const orderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (orders && orders.length > 0) {
            setSelectedOrder(orders[0]);
        } else setSelectedOrder(null);
    }, [orders]);

    const handleOrderClick = (order: IOrder) => {
        setSelectedOrder(order);
        setIsDetailsVisible(true);
        const rect = orderRef.current?.getBoundingClientRect();
        if (rect) {
            const top = window.scrollY + rect.top - 150;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    const handleBackToList = () => {
        setIsDetailsVisible(false);
    };

    return (
        <Container>
            <div
                className="flex gap-[30px] w-full p-8 border-1 
            border-primary-900/30 rounded-xl bg-gradient shadow-lg mt-5 items-start"
            >
                {orders.length ? (
                    <>
                        <div
                            className={`flex flex-col gap-4 sm:gap-6 w-full md:w-1/2
                                ${isDetailsVisible ? "hidden md:flex" : "flex"
                                }`}
                        >
                            {orders?.map((order: IOrder) => (
                                <OrderHistoryItem
                                    key={order.id}
                                    order={order}
                                    handleOrderClick={handleOrderClick}
                                />
                            ))}
                        </div>
                        <div
                            ref={orderRef}
                            className={`relative w-full md:w-1/2 p-4 border-1 border-primary-900/30
                                rounded-xl filters-bg-gradient shadow-lg
                                ${isDetailsVisible ? "flex" : "hidden md:flex"
                                }`}
                        >
                            {selectedOrder && (
                                <>
                                    <button
                                        onClick={handleBackToList}
                                        className="absolute top-[6px] left-0 md:hidden mb-4 px-4 py-2 text-white/70 hover:text-white
                                            flex items-center gap-2 transition-colors duration-300"
                                    >
                                        <ArrowLeft className="stroke-white/70 w-[20px] h-[20px]" />
                                    </button>
                                    <OrderDetails
                                        order={selectedOrder}
                                        shipping={shipping}
                                    />
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="w-full">
                        <p className="text-white font-bold text-center">
                            История заказов пуста...
                        </p>
                    </div>
                )}
            </div>
        </Container>
    );
};