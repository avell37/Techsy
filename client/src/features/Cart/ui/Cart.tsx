import { useMemo, useState } from "react";
import { CartView } from "./CartView/CartView";
import { useAppSelector, useNotification } from "@/shared/hooks";
import { getTotalPrice, basketSelector, shippingSelector } from "@/entities";
import { isShippingValid } from "../lib/isShippingValid";
import { useCreateOrder } from "../hooks/useCreateOrder";

export const Cart = () => {
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
    const totalPrice = useAppSelector(getTotalPrice);
    const shipping = useAppSelector(shippingSelector.shipping);
    const basket = useAppSelector(basketSelector.basket);
    const { notifyWarn } = useNotification();
    const { create } = useCreateOrder()

    const orderItems = useMemo(() =>
        basket.map((device) => ({
            id: device.id,
            name: device.device.name,
            price: device.device.price,
            img: device.device.img,
            quantity: device.quantity ?? 1,
        })), [basket]);

    const handleCreateOrder = async () => {
        const shippingData = isShippingValid(shipping);
        if (!shippingData) {
            notifyWarn("Пожалуйста, заполните информацию об адресе доставки в профиле.")
            return;
        }

        if (!selectedPayment) {
            notifyWarn("Пожалуйста, выберите способ оплаты");
            return;
        }

        try {
            if (selectedPayment === "yoomoney") {
                const { confirmationUrl } = await create(orderItems, totalPrice);
                window.location.href = confirmationUrl;
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="border-1 border-primary-900 rounded-xl max-w-[400px] min-h-[400px] h-full w-full p-6 max-lg:max-w-full max-lg:min-h-[300px]">
            <CartView
                totalPrice={totalPrice}
                handleCreateOrder={handleCreateOrder}
                setSelectedPayment={setSelectedPayment}
            />
        </div>
    );
};
