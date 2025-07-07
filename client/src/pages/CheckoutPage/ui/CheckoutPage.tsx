import { useActions, useAppSelector } from "@/shared/hooks";
import { Container } from "@/shared/ui";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { renderStatus } from "../utils/renderStatus";
import { orderStatusSelector } from "@/entities/Order";

const CheckoutPage = () => {
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
            filters-bg-gradient border border-primary-900/30 py-10 rounded-xl">
                {renderStatus(status)};
                <p className="absolute top-3 left-3 text-gray-500 text-sm">заказ: {orderId}</p>
            </div>
        </Container>
    );
};

export default CheckoutPage;
