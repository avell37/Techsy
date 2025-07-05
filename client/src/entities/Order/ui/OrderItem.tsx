import { IOrderItem } from "@/shared/types/IOrderItem";

export const OrderItem = ({ item }: { item: IOrderItem }) => {
    const totalPrice = item.price * item.quantity;

    return (
        <div
            key={item.id}
            className="flex items-center border border-primary-900/30 rounded-md p-2 gap-[10px] max-sm:items-center max-sm:flex-col max-sm:justify-center"
        >
            <div className="flex justify-center items-center max-sm:flex-col gap-[5px]">
                <div className="flex justify-center items-center w-[60px] h-[60px]">
                    <img
                        className="w-[50px] h-[50px] object-contain"
                        src={`${import.meta.env.VITE_API_URL}/uploads/${item.img}`}
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-white max-sm:text-xs">{item.name}</span>
                    <span className="text-gray-400 text-sm max-sm:text-xs">
                        {item.quantity} шт.
                    </span>
                </div>
            </div>
            <div className="flex flex-col ml-auto max-sm:ml-0 max-sm:items-center">
                <span className="text-white max-sm:text-xs">{totalPrice}₽</span>
                <span className="text-gray-400 text-xs max-sm:text-[10px]">{item.price}₽/шт.</span>
            </div>
        </div>
    );
};
