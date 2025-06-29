import { statusTranslations } from '@/shared/config/statusTranslations';
import { IShipping } from '@/shared/types';
import { IOrder } from '@/shared/types/IOrder'
import { Divider, FormattedDate } from '@/shared/ui'
import { OrderItem } from './OrderItem';

interface Props {
    order: IOrder,
    shipping: IShipping
}

export const OrderDetails = ({ order, shipping }: Props) => (
    <div className='relative flex flex-col'>
        <div className='flex justify-between'>
            <span className='text-gray-400 text-xs'>Заказ: №&nbsp;{order.id}</span>
            <FormattedDate date={order.createdAt} className='text-gray-400 text-xs' />
        </div>
        <div className='flex flex-col justify-center items-center mt-[32px] mb-8'>
            <h1 className='text-white text-2xl font-bold'>{statusTranslations[order.status]}</h1>
            <Divider variant='w-full h-[2px] mt-6' />
        </div>
        <div className='flex flex-col gap-[20px]'>
            <div className='flex flex-col gap-[10px]'>
                <p className='text-gray-400'>Адрес</p>
                <p className='text-white text-sm'>{shipping.city}, {shipping.address}</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <p className='text-gray-400'>Доставка</p>
                <p className='text-white text-sm'>{order.delivery}</p>
            </div>
        </div>
        <Divider variant="w-full h-[2px] my-6" />
        <div className='flex flex-col gap-[20px] mb-[20px]'>
            <p className='text-gray-400'>Состав заказа</p>
            <div className='flex flex-col gap-[10px]'>
                {order.OrderItem.map((item) => (
                    <OrderItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </div>
        <Divider variant="w-full h-[2px] my-6" />
        <div className='flex justify-between mb-4'>
            <p className='text-white text-xl font-bold'>Итого</p>
            <p className='text-white text-xl font-bold'>{order.price}₽</p>
        </div>
    </div>
)