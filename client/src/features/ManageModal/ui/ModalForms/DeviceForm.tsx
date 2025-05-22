import { XMarkIcon } from "@/shared/assets";
import { Input, Button, Dropdown } from "@/shared/ui";
import { useDeviceForm, FormSchema } from "@features/ManageModal";
import React from "react";
import { DeviceInfoItemSchema } from "../../model/types/DeviceInfoSchema";

export const DeviceForm = ({ onClose }: FormSchema) => {
    const {
        device,
        brandItems,
        typeItems,
        handleChange,
        handleFileChange,
        handleSubmitForm,
        info,
        handleAddInfo,
        handleChangeInfo,
        handleRemoveInfo,
    } = useDeviceForm();
    console.log("rerender");

    const DeviceInfoItem = React.memo(
        ({ item, onChange, onRemove }: DeviceInfoItemSchema) => {
            return (
                <div className="flex items-center gap-[10px]">
                    <Input
                        value={item.title}
                        className="w-[175px] w-full h-[40px] bg-[#111729] rounded-md border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                        placeholder="Название свойства"
                        onChange={(e) =>
                            onChange(item.id, "title", e.target.value)
                        }
                    />
                    <Input
                        value={item.description}
                        className="w-[175px] w-full h-[40px] bg-[#111729] rounded-md border-gray-700 border-2 text-white pl-2 text-sm focus:border-[#4F45E4] outline-none"
                        placeholder="Описание свойства"
                        onChange={(e) =>
                            onChange(item.id, "description", e.target.value)
                        }
                    />
                    <Button type="button" onClick={() => onRemove(item.id)}>
                        <XMarkIcon
                            width="20px"
                            height="20px"
                            className="stroke-red-500"
                        />
                    </Button>
                </div>
            );
        }
    );

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
                        className="w-[175px] h-[40px] cursor-pointer text-center text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition"
                        text={device.brandName}
                    />
                }
                items={brandItems}
                className="left"
                triggerClassname="max-w-[175px]"
            />
            <Dropdown
                trigger={
                    <Button
                        type="button"
                        className="w-[175px] h-[40px] cursor-pointer text-center text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition"
                        text={device.typeName}
                    />
                }
                items={typeItems}
                className="left"
                triggerClassname="max-w-[175px]"
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
                <label className="max-w-[175px] flex flex-col text-white gap-[10px] cursor-pointer">
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
                <div>
                    <Button
                        type="button"
                        onClick={handleAddInfo}
                        className="w-[175px] h-[40px] cursor-pointer text-center text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition"
                        text="Добавить свойства"
                    />
                    <div className="flex flex-col gap-[10px] mt-[20px]">
                        {info.map((i) => (
                            <DeviceInfoItem
                                key={i.id}
                                item={i}
                                onChange={handleChangeInfo}
                                onRemove={handleRemoveInfo}
                            />
                        ))}
                    </div>
                </div>
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
