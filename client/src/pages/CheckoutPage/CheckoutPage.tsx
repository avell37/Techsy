import { fetchOrderStatus } from "@/entities";
import { Spinner } from "@/shared/assets";
import { SuccessIcon } from "@/shared/assets/icons/SuccessIcon";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/Header";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const CheckoutPage = () => {
    const [params] = useSearchParams();
    const orderId = params.get("orderId");
    const dispatch = useAppDispatch();
    const { status, loading } = useAppSelector((state) => state.orderStatusReducer);

    useEffect(() => {
        if (orderId) {
            dispatch(fetchOrderStatus(orderId));
        }
    }, [orderId]);

    const renderStatus = () => {
        switch (status) {
            case 'created':
                return <p className="text-white">Заказ создан, оплатите.</p>;
            case 'pending':
                return <p className="text-white">Ожидание оплаты...</p>;
            case 'success':
                return <p className={`${status === 'success' ? 'text-green-500 font-bold' : 'text-white'}`}>Оплата прошла успешно!</p>;
            case 'cancelled':
                return <p className="text-white">Произошла ошибка. Деньги с вашего счета не были списаны.</p>;
        }
    }

    return (
        <div>
            <Header />
            <Container>
                <div className="flex flex-col justify-center items-center mt-5 gap-[20px] filters-bg-gradient border border-[#5120B8]/30 py-10 rounded-xl">
                    {status === "success" && <SuccessIcon />}
                    <h1 className="text-white text-2xl">Статус оплаты</h1>
                    {loading ? (
                        <Spinner width="50px" height="50px" />
                    ) : (
                        <>
                            <p className="text-white">Ваш заказ: {orderId}</p>
                            {renderStatus()}
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default CheckoutPage;
