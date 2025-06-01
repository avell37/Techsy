import { saveShippingInfo } from "@/shared/api/userApi";
import { useAppSelector, useNotification } from "@/shared/hooks";
import { IShipping } from "@/shared/types/IShipping";
import { Input, Button } from "@/shared/ui";
import { useState, useEffect } from "react";
import { FormSchema } from "../../model/types/ModalSchema";

export const AddressForm = ({ onClose }: FormSchema) => {
    const { shipping } = useAppSelector((state) => state.shippingReducer);
    const { notifySuccess, notifyError } = useNotification();
    const [data, setData] = useState<IShipping>({
        firstName: "",
        lastName: "",
        phone: "",
        country: "",
        region: "",
        zipCode: "",
        city: "",
        address: "",
    });

    useEffect(() => {
        if (shipping) {
            setData(shipping);
        }
    }, [shipping]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await saveShippingInfo(data);
            notifySuccess("Данные успешно сохранены");
        } catch (err) {
            console.error(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] p-6">
            <h1 className="text-white mt-2">
                Заполните форму для доставки по адресу:
            </h1>
            <div className="flex gap-[20px] flex-wrap">
                <Input
                    noWrap
                    className="max-w-[200px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Имя"
                    name="firstName"
                    value={data?.firstName}
                    onChange={handleChange}
                />
                <Input
                    noWrap
                    className="max-w-[200px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Фамилия"
                    name="lastName"
                    value={data?.lastName}
                    onChange={handleChange}
                />
                <Input
                    noWrap
                    className="max-w-[200px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Телефон"
                    name="phone"
                    value={data?.phone}
                    onChange={handleChange}
                />
                <Input
                    noWrap
                    className="max-w-[200px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Страна"
                    name="country"
                    value={data?.country}
                    onChange={handleChange}
                />
                <Input
                    noWrap
                    className="max-w-[200px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Регион/область"
                    name="region"
                    value={data?.region}
                    onChange={handleChange}
                />
                <Input
                    noWrap
                    className="max-w-[200px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Индекс"
                    name="zipCode"
                    value={data?.zipCode}
                    onChange={handleChange}
                />
                <Input
                    noWrap
                    className="max-w-[200px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Город"
                    name="city"
                    value={data?.city}
                    onChange={handleChange}
                />
                <Input
                    noWrap
                    className="max-w-[200px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Адрес"
                    name="address"
                    value={data?.address}
                    onChange={handleChange}
                />
            </div>
            <div className="flex justify-end gap-[10px]">
                <Button
                    className="rounded-md max-w-[100px] w-full h-[40px] bg-[#5120B8] font-bold focus:outline-none cursor-pointer text-white"
                    type="submit"
                    text="Сохранить"
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
