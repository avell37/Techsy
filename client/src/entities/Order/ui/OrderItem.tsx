import { IOrderItem } from "@/shared/types/IOrderItem"

export const OrderItem = ({ item }: { item: IOrderItem }) => {

    const totalPrice = item.price * item.quantity

    return (
        <div key={item.id} className='flex items-center border border-primary-900/30 rounded-md p-2 gap-[10px]'>
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
                <span className='text-white'>{totalPrice}₽</span>
                <span className='text-gray-400 text-xs'>{item.price}₽/шт.</span>
            </div>
        </div>
    )
}
