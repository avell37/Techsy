import { statusTranslations } from "@/shared/config/statusTranslations";
import { IShipping } from "@/shared/types";
import { IOrder } from "@/shared/types/IOrder";
import { Divider, FormattedDate } from "@/shared/ui";
import { OrderItem } from "./OrderItem";

interface Props {
    order: IOrder;
    shipping: IShipping;
}

export const OrderDetails = ({ order, shipping }: Props) => (
    <div className="relative flex flex-col w-full">
        <div className="flex justify-between max-sm:flex-col max-sm:justify-center max-sm:items-end">
            <span className="text-gray-400 text-xs break-words max-md:pl-7 max-sm:max-w-[120px] text-end">
                Заказ: №&nbsp;{order.id}
            </span>
            <FormattedDate
                date={order.createdAt}
                className="text-gray-400 text-xs max-sm:mt-2"
            />
        </div>
        <div className="flex flex-col justify-center items-center mt-[32px] mb-8">
            <h1 className="text-white text-2xl font-bold max-sm:text-xl">
                {statusTranslations[order.status]}
            </h1>
            <Divider variant="w-full h-[2px] mt-6" />
        </div>
        <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[10px]">
                <p className="text-gray-400 max-sm:text-sm">Адрес</p>
                <p className="text-white text-sm max-sm:text-xs">
                    {shipping.city}, {shipping.address}
                </p>
            </div>
            <div className="flex flex-col gap-[10px]">
                <p className="text-gray-400 max-sm:text-sm">Доставка</p>
                <p className="text-white text-sm max-sm:text-xs">{order.delivery}</p>
            </div>
        </div>
        <Divider variant="w-full h-[2px] my-6" />
        <div className="flex flex-col gap-[20px] mb-[20px]">
            <p className="text-gray-400 max-sm:text-sm">Состав заказа</p>
            <div className="flex flex-col gap-[10px]">
                {order.OrderItem.map((item) => (
                    <OrderItem key={item.id} item={item} />
                ))}
            </div>
        </div>
        <Divider variant="w-full h-[2px] my-6" />
        <div className="flex justify-between mb-4 max-sm:flex-col max-sm:gap-2 max-sm:items-center">
            <p className="text-white text-xl font-bold max-sm:text-lg">Итого:</p>
            <p className="text-white text-xl font-bold max-sm:text-lg">{order.price}₽</p>
        </div>
    </div>
);
