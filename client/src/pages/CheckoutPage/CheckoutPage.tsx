import { Spinner } from "@/shared/assets";
import { Header } from "@/widgets/Header";
import { useSearchParams } from "react-router-dom";

const CheckoutPage = () => {
    const [params] = useSearchParams();
    const orderId = params.get("orderId");

    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center items-center mt-20 gap-[20px]">
                <h1 className="text-white text-2xl">Статус оплаты</h1>
                <Spinner width="50px" height="50px" />
                <p className="text-white">Ваш заказ: #{orderId}</p>
                <p className="text-white">Ожидание подтверждения платежа...</p>
            </div>
        </div>
    );
};

export default CheckoutPage;
