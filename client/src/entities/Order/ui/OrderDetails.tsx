import { IShipping } from '@/shared/types';
import { IOrder } from '@/shared/types/IOrder'
import { FormattedDate } from '@/shared/ui'

interface Props {
    order: IOrder,
    shipping: IShipping
}

export const OrderDetails = ({ order, shipping }: Props) => {
    const statusTranslations = {
        created: 'Создан',
        pending: 'Ожидание оплаты',
        cancelled: 'Отменён',
        success: 'Оплачено'
    } as const;
    console.log(order);

    return (
        <div className='relative flex flex-col'>
            <div className='flex justify-between'>
                <span className='text-gray-400 text-xs'>Заказ: №&nbsp;{order.id}</span>
                <FormattedDate date={order.createdAt} className='text-gray-400 text-xs' />
            </div>
            <div className='flex flex-col justify-center items-center mt-[32px] mb-8'>
                <h1 className='text-white text-2xl font-bold'>{statusTranslations[order.status]}</h1>
                <div className='divider mt-6'></div>
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
            <div className='divider mt-6 mb-6'></div>
            <div className='flex flex-col gap-[20px] mb-[20px]'>
                <p className='text-gray-400'>Состав заказа</p>
                <div className='flex flex-col gap-[10px]'>
                    {order.OrderItem.map((item) => (
                        <div key={item.id} className='flex items-center border border-[#5120B8]/30 rounded-md p-2 gap-[10px]'>
                            <div className='flex justify-center items-center w-[60px] h-[60px]'>
                                <img
                                    className="w-[50px] h-[50px] object-contain"
                                    src={`${import.meta.env.VITE_API_URL}/${item.img}`} />
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-white'>{item.name}</span>
                                <span className='text-gray-400 text-sm'>{item.quantity} шт.</span>
                            </div>
                            <div className='flex flex-col ml-auto'>
                                <span className='text-white'>{item.price * item.quantity}₽</span>
                                <span className='text-gray-400 text-xs'>{item.price}₽/шт.</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='divider mt-6 mb-6'></div>
            <div className='flex justify-between mb-4'>
                <p className='text-white text-xl font-bold'>Итого</p>
                <p className='text-white text-xl font-bold'>{order.price}₽</p>
            </div>
        </div>
    )
}
