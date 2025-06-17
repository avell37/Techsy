import { IOrder } from "@/shared/types/IOrder";

export const OrderHistoryCard = ({ order }: { order: IOrder }) => {
    return (
        <div className="relative rounded-xl border border-[#5120B8]/30 font-bold focus:outline-none">
            <div className="p-2">
                <span className="text-white">Заказ #93827-cdA-1</span>
                <div className="flex justify-between my-7">
                    {/* <div className="text-white">
                        {/* {order.OrderItem.map((item) => (
                            <div>
                                <img src={
                                    item.img.startsWith("http")
                                        ? item.img
                                        : import.meta.env.VITE_API_URL + '/' +
                                        item?.img
                                } className="w-[50px] h-[50px] object-cover" />
                                <p className="text-white">{item.quantity}x {item.name}</p>
                            </div>
                        ))} */}
                    {/* </div> */}
                    <div className="text-white">Статус: {order.status}</div>
                    <div className="text-white">Доставка ожидается через: {order.delivery}</div>
                    <div className="text-purple-500">{order.price} Р.</div>
                </div>
                <div className="text-gray-500 text-sm">
                    <p>кликните, чтобы узнать подробности</p>
                </div>
                <span className="absolute top-2 right-2 text-white">12.06.2025, 12:49</span>
            </div>
        </div >
    );
};
