import image from './image.png';
import { Button } from '../Button/Button';

export const BasketCard = () => {
    return (
        <div className='flex justify-center w-full'>
            <div className='flex items-center border-1 border-[#5120B8] rounded-xl max-w-[800px] w-full p-4'>
                <img src={image} className='max-w-[100px]' />
                <div className='flex justify-between w-full'>
                    <p className='text-white'>IPhone 16 PRO Max</p>
                    <div className='flex justify-center items-center w-[150px] h-[40px] bg-[#5120B8] text-center text-white rounded-md gap-[20px]'>
                        <Button
                        className='text-white cursor-pointer'
                        text="-" />
                        <span>2</span>
                        <Button 
                        className='text-white cursor-pointer'
                        text="+"  />
                    </div>
                    <p className='text-white'>129,999 Р.</p>
                </div>
            </div>
        </div>
    )
}
