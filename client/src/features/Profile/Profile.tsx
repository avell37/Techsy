import icon from './default-user.png';
import { Input } from '@/shared/components/Input/Input';
import { Button } from '@/shared/components/Button/Button';

export const Profile: React.FC = () => {
    return (
        <div className='flex justify-center w-full gap-[100px]'>
            <div className='flex flex-col gap-[20px] items-center justify-center'>
                <div className='border-2 border-[#3A177F] rounded-full bg-transparent'>
                    <img src={icon} className='w-[150px] h-[150px]' />
                </div>
                <Button
                className="rounded-md w-[200px] h-[50px] bg-[#5120B8] font-bold focus:outline-none cursor-pointer text-white"
                text="Сменить аватарку" />
            </div>
            <div className='flex flex-col gap-[20px] min-w-[500px]'>
                <p className='text-white'>Имя пользователя:</p>
                <Input
                className="max-w-[500px] w-full border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-2 text-start rounded-md text-white outline-none"
                type="text"
                placeholder="Введите название какой нить хуеты" />
                <p className='text-white'>E-mail:</p>
                <Input
                className="max-w-[500px] w-full border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-2 text-start rounded-md text-white outline-none"
                type="text"
                placeholder="Введите название какой нить хуеты" />
            </div>
        </div>
    )
}
