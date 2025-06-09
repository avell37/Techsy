import { Button, Input } from "@/shared/ui";
import React from "react";
import { FormSchema } from "../../model/types/ModalSchema";

export const ProfileForm = ({ onClose }: FormSchema) => {
    return (
        <form className="flex flex-col gap-[30px] p-4">
            <h1 className="text-white pt-4 text-xl font-bold">Ваш отзыв:</h1>
            <Input
                noWrap
                className="max-w-[450px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-4 focus:border-[#4F45E4] outline-none"
                placeholder="Введите текст отзыва"
            />
            <div className="flex justify-end mb-6 mr-2 gap-[10px]">
                <Button
                    className="rounded-md max-w-[100px] w-full h-[40px] bg-[#5120B8] font-bold focus:outline-none cursor-pointer text-white"
                    type="submit"
                    text="Добавить"
                />
                <Button
                    className="rounded-md max-w-[100px] w-full h-[40px] bg-red-900 font-bold focus:outline-none cursor-pointer text-white"
                    onClick={onClose}
                    text="Закрыть"
                />
            </div>
        </form>
    );
};
