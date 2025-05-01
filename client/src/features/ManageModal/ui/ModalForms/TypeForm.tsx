import { Input, Button } from "@/shared/ui";
import { useState } from "react";
import { useNotification } from "@/shared/hooks/useNotification";
import { createType } from "@/shared/api/deviceApi";
import { FormProps } from "../types";

export const TypeForm = ({ onClose }: FormProps) => {
    const [typeName, setTypeName] = useState("");

    const { notifySuccess, notifyWarn, notifyError } = useNotification();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (typeName.length <= 0) {
                return notifyWarn("Поле обязательно для заполнения");
            }
            await createType(typeName);
            notifySuccess("Отлично! Бренд уже на сайте!");
            setTypeName("");
        } catch (err) {
            console.log(err);
            notifyError("Ошибка... Попробуй еще раз :)");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[30px] pl-6">
            <h1 className="text-white pt-8 text-xl font-bold">Добавить тип:</h1>
            <Input
                noWrap
                className="max-w-[450px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-4 focus:border-[#4F45E4] outline-none"
                placeholder="Введите тип устройства"
                value={typeName}
                onChange={(e) => setTypeName(e.target.value)}
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
