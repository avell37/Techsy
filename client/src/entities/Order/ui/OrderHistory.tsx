import { Container } from "@/shared/ui";
import { IOrder } from "@/shared/types/IOrder";
import { OrderDetails } from "./OrderDetails";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/shared/hooks";
import { shippingSelector } from "@/entities/Shipping";
import { OrderHistoryItem } from "./OrderHistoryItem";
import { sortedOrders } from "../utils/sortedOrders";
import { ArrowLeft } from "@/shared/assets";

export const OrderHistory = ({ orders }: { orders: IOrder[] }) => {
    const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(
        orders?.[0] ?? null
    );
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const shipping = useAppSelector(shippingSelector.shipping);
    const orderRef = useRef<HTMLDivElement>(null);
    const sorted = sortedOrders(orders);

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
            border-primary-900/30 rounded-xl filters-bg-gradient shadow-lg mt-5 items-start"
            >
                {shipping ? (
                    <>
                        <div
                            className={`flex flex-col gap-4 sm:gap-6 w-full md:w-1/2
                                ${isDetailsVisible ? "hidden md:flex" : "flex"
                                }`}
                        >
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
                        <p className="text-light-purple font-bold text-center">
                            История заказов пуста...
                        </p>
                    </div>
                )}
            </div>
        </Container>
    );
};

// import { Container } from "@/shared/ui";
// import { IOrder } from "@/shared/types/IOrder";
// import { OrderDetails } from "./OrderDetails";
// import { useEffect, useRef, useState } from "react";
// import { useAppSelector } from "@/shared/hooks";
// import { shippingSelector } from "@/entities/Shipping";
// import { OrderHistoryItem } from "./OrderHistoryItem";
// import { sortedOrders } from "../utils/sortedOrders";

// export const OrderHistory = ({ orders }: { orders: IOrder[] }) => {
//     const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(orders?.[0] ?? null);
//     const [isDetailsVisible, setIsDetailsVisible] = useState(false);
//     const shipping = useAppSelector(shippingSelector.shipping);
//     const orderRef = useRef<HTMLDivElement>(null);
//     const sorted = sortedOrders(orders);

//     useEffect(() => {
//         if (orders && orders.length > 0) {
//             setSelectedOrder(orders[0]);
//         } else setSelectedOrder(null);
//     }, [orders])

//     const handleOrderClick = (order: IOrder) => {
//         setSelectedOrder(order);
//         setIsDetailsVisible(true);

//         // На мобильных устройствах прокручиваем к деталям заказа
//         if (window.innerWidth < 768) {
//             const rect = orderRef.current?.getBoundingClientRect();
//             if (rect) {
//                 const top = window.scrollY + rect.top - 20;
//                 window.scrollTo({ top, behavior: "smooth" });
//             }
//         }
//     }

//     const handleBackToList = () => {
//         setIsDetailsVisible(false);
//     }

//     if (!shipping) {
//         return (
//             <Container>
//                 <div className="flex w-full p-4 sm:p-8 border-1 border-primary-900/30
//                     rounded-xl filters-bg-gradient shadow-lg mt-5">
//                     <div className="w-full">
//                         <p className="text-light-purple font-bold text-center">
//                             История заказов пуста...
//                         </p>
//                     </div>
//                 </div>
//             </Container>
//         );
//     }

//     return (
//         <Container>
//             <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full p-4 sm:p-8
//                 border-1 border-primary-900/30 rounded-xl filters-bg-gradient shadow-lg mt-5">
//                 <div className={`flex flex-col gap-4 sm:gap-6 w-full md:w-1/2
//                     ${isDetailsVisible ? 'hidden md:flex' : 'flex'}`}>
//                     {sorted?.map((order) => (
//                         <OrderHistoryItem
//                             key={order.id}
//                             order={order}
//                             handleOrderClick={handleOrderClick}
//                             isSelected={selectedOrder?.id === order.id}
//                         />
//                     ))}
//                 </div>

//                 <div ref={orderRef}
//                     className={`w-full md:w-1/2 p-4 border-1 border-primary-900/30
//                     rounded-xl filters-bg-gradient shadow-lg
//                     ${isDetailsVisible ? 'flex' : 'hidden md:flex'}`}
//                 >
//                     {selectedOrder && (
//                         <>
//                             <button
//                                 onClick={handleBackToList}
//                                 className="md:hidden mb-4 px-4 py-2 text-white/70 hover:text-white
//                                     flex items-center gap-2 transition-colors duration-300"
//                             >
//                                 <span className="text-xl">&larr;</span>
//                                 <span>Назад к списку</span>
//                             </button>
//                             <OrderDetails
//                                 order={selectedOrder}
//                                 shipping={shipping}
//                             />
//                         </>
//                     )}
//                 </div>
//             </div>
//         </Container>
//     );
// };
