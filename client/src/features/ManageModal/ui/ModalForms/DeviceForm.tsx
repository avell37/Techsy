import { Input, Button, Dropdown } from "@/shared/ui";
import { FormProps } from "../types";
import { useDeviceForm } from "../../model/useDeviceForm";

export const DeviceForm = ({ onClose }: FormProps) => {
    const {
        device,
        brandItems,
        typeItems,
        handleChange,
        handleFileChange,
        handleSubmitForm,
    } = useDeviceForm();

    return (
        <form
            onSubmit={handleSubmitForm}
            className="flex flex-col gap-[30px] pl-6"
        >
            <h1 className="text-white pt-8 text-xl font-bold">
                Добавить устройство:
            </h1>
            <Dropdown
                trigger={
                    <Button
                        type="button"
                        className="w-[175px] h-[40px] text-center text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition"
                        text={device.brandName}
                    />
                }
                items={brandItems}
                className="left"
            />
            <Dropdown
                trigger={
                    <Button
                        type="button"
                        className="w-[175px] h-[40px] text-center text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition"
                        text={device.typeName}
                    />
                }
                items={typeItems}
                className="left"
            />
            <div className="w-full flex flex-col gap-[15px]">
                <Input
                    noWrap
                    className="max-w-[450px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Название устройства"
                    value={device.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
                <Input
                    noWrap
                    className="max-w-[450px] w-full h-[40px] bg-[#111729] rounded-xl border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                    placeholder="Цена"
                    value={device.price}
                    onChange={(e) => handleChange("price", e.target.value)}
                />
                <label className="max-w-[175px] flex flex-col text-white gap-[10px]">
                    {device.img && (
                        <div className="border-2 border-[#5120B8] p-2 rounded-md">
                            <img
                                src={URL.createObjectURL(device.img)}
                                alt="Предпросмотр"
                                className="w-[175px] h-40 object-contain"
                            />
                        </div>
                    )}
                    <div className="w-[175px] h-[40px] text-center p-2 rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition">
                        Выбрать фото
                    </div>
                    <Input
                        noWrap
                        className="hidden"
                        type="file"
                        name="img"
                        onChange={handleFileChange}
                    />
                </label>
            </div>
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
