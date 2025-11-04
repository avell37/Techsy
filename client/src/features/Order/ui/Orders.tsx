import { useActions, useAppSelector } from "@/shared/hooks";
import { useSearchParams } from "react-router-dom";
import { orderStatusSelector } from "../model/slice/orderStatusSelector";
import { useEffect } from "react";
import { Container } from "@/shared/ui/custom";
import { renderStatus } from "../model/lib/renderStatus";

export const Orders = () => {
    const [params] = useSearchParams();
    const orderId = params.get("orderId");
    const status = useAppSelector(orderStatusSelector.status);
    const { fetchOrderStatus } = useActions();

    useEffect(() => {
        if (orderId) {
            fetchOrderStatus(orderId);
        }
    }, [orderId]);

    return (
        <Container>
            <div className="relative flex flex-col justify-center items-center mt-5 
            bg-gradient border border-primary-900/30 py-10 rounded-xl">
                {renderStatus(status)};
                <p className="absolute top-3 left-3 text-gray-500 text-sm">заказ: {orderId}</p>
            </div>
        </Container>
    );
}
