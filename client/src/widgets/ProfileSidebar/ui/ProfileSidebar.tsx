import { Button } from "@/shared/ui";

export const ProfileSidebar = () => {
    return (
        <div className="border-r-1 border-[#5120B8]/30 h-full max-w-[250px] w-full flex flex-col items-center gap-[10px]">
            <Button
                text="Профиль"
                className="rounded-md w-[200px] h-[50px] border border-[#5120B8]/30 font-bold focus:outline-none cursor-pointer text-white mt-[20px]"
            />
            <Button
                text="Безопасность"
                className="rounded-md w-[200px] h-[50px] border border-[#5120B8]/30 font-bold focus:outline-none cursor-pointer text-white"
            />
            <Button
                text="История заказов"
                className="rounded-md w-[200px] h-[50px] border border-[#5120B8]/30 font-bold focus:outline-none cursor-pointer text-white"
            />
        </div>
    );
};
