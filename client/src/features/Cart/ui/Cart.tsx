import { useState } from "react";
import { CartView } from "./CartView/CartView";
import {
    useAppDispatch,
    useAppSelector,
    useModal,
    useNotification,
} from "@/shared/hooks";
import { getTotalPrice } from "@/entities";
import {
    createNewOrder,
    createNewPayment,
} from "@/features/Payment/model/services/paymentThunks";

export const Cart = () => {
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
    const totalPrice = useAppSelector(getTotalPrice);
    const basket = useAppSelector((state) => state.basketReducer.basket);
    const dispatch = useAppDispatch();
    const { notifyWarn } = useNotification();
    const { isOpen, contentType, openModal, closeModal } = useModal();

    const orderItems = basket.map((device) => ({
        id: device.id,
        name: device.device.name,
        price: device.device.price,
        img: device.device.img,
        quantity: device.quantity ?? 1,
    }));

    console.log(basket);

    const handleCreateOrder = async () => {
        if (!selectedPayment) {
            notifyWarn("Пожалуйста, выберите способ оплаты");
            return;
        }

        try {
            if (selectedPayment === "yoomoney") {
                const order = await dispatch(
                    createNewOrder({
                        items: orderItems,
                        totalPrice,
                        delivery: "3 дня",
                    })
                ).unwrap();

                const confirmationUrl = await dispatch(
                    createNewPayment(order)
                ).unwrap();

                window.location.href = confirmationUrl;
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="border-1 border-[#5120B8] rounded-xl max-w-[400px] min-h-[400px] h-full w-full p-6">
            <CartView
                handleCreateOrder={handleCreateOrder}
                setSelectedPayment={setSelectedPayment}
                totalPrice={totalPrice}
                isOpen={isOpen}
                contentType={contentType}
                openModal={openModal}
                closeModal={closeModal}
            />
        </div>
    );
};
