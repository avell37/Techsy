import iphone from './image.png'
import star from './star.png';
import { Button } from '../Button/Button';

export const Card = () => {
    return (
            <div className="relative flex flex-col justify-center items-center border-2 border-gray-800 max-w-[250px] w-full gap-[10px] rounded-xl">
                <div className='relative flex w-full'>
                    <img className='absolute text-white top-2 right-5 w-[15px] h-[15px]' src={star} />
                    <span className='absolute top-1 right-2 text-white'>4</span>
                </div>
                <img className='' src={iphone} />
                <div className='relative flex flex-col w-full gap-[5px] pb-[8px]'>
                    <div className="text-white text-start ml-[5px]">IPhone 16 PRO MAX</div>
                    <div className='text-white ml-[5px]'>129,999 Р.</div>
                    <Button
                    className="absolute bottom-1 right-1 rounded-full w-[50px] h-[50px] bg-purple-600 font-bold focus:outline-none cursor-pointer text-white"
                    text="+" />
                </div>
            </div>
    )
}