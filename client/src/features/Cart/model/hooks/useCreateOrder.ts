import { useAppSelector, useNotification } from "@/shared/hooks";
import { useMemo } from "react";
import { isShippingValid } from "../lib/isShippingValid";
import { basketSelector, getTotalPrice } from "@/entities/Basket";
import { shippingSelector } from "@/entities/Shipping";
import {
    createOrder,
    createPayment,
    type OrderItemProps,
} from "@/features/Order";

type СreateOrderResult = {
    confirmationUrl: string;
};

export const useCreateOrder = () => {
    const totalPrice = useAppSelector(getTotalPrice);
    const shipping = useAppSelector(shippingSelector.shipping);
    const basket = useAppSelector(basketSelector.basket);
    const { notifyWarn } = useNotification();

    const orderItems = useMemo(
        () =>
            basket.map((device) => ({
                id: device.id,
                name: device.device.name,
                price: device.device.price,
                img: device.device.img,
                quantity: device.quantity ?? 1,
            })),
        [basket]
    );

    const create = async (
        orderItems: OrderItemProps[],
        totalPrice: number
    ): Promise<СreateOrderResult> => {
        const orderData = {
            items: orderItems,
            totalPrice,
            delivery: "3 дня",
        };

        const order = await createOrder(orderData);
        const confirmationUrl = await createPayment(order);
        return { confirmationUrl };
    };

    const handleCreateOrder = async () => {
        const shippingData = isShippingValid(shipping);
        if (!shippingData) {
            notifyWarn(
                "Пожалуйста, заполните информацию об адресе доставки в профиле."
            );
            return;
        }

        try {
            const { confirmationUrl } = await create(orderItems, totalPrice);
            window.location.href = confirmationUrl;
        } catch (err) {
            console.error(err);
        }
    };

    return {
        basket,
        totalPrice,
        handleCreateOrder,
    };
};
