import { IOrder } from "@/shared/types/IOrder";
import { FormattedDate } from "@/shared/ui";
import { useHiddenCount } from "../hooks/useHiddenCount";

export const OrderHistoryCard = ({ order }: { order: IOrder }) => {

    const { visibleItems, hiddenCount } = useHiddenCount(order);

    return (
        <div className="flex flex-col gap-[10px] max-w-[500px]">
            <div className='flex justify-between max-sm:flex-col'>
                <span className='text-gray-400 text-xs break-words'>Заказ: №&nbsp;{order.id}</span>
                <FormattedDate date={order.createdAt} className='text-gray-400 text-xs' />
            </div>
            <div className="flex gap-[10px] flex-wrap max-w-[250px]">
                {visibleItems.map((item) => (
                    <img
                        key={item.id}
                        className="w-[30px] h-[30px] object-contain"
                        src={`${import.meta.env.VITE_API_URL}/uploads/${item.img}`} />
                ))}
                {hiddenCount > 0 && (
                    <div className="w-[30px] h-[30px] rounded-full bg-primary-900 
                    text-white text-xs flex items-center justify-center">
                        +{hiddenCount}
                    </div>
                )}
            </div>
        </div >
    );
};
