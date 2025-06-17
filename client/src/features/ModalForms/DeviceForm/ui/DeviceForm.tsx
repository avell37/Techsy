import { Input, Button, Dropdown, ImagePreview } from "@/shared/ui";
import { useDeviceForm, FormSchema } from "@features/ManageModal";
import { DeviceInfoItem } from "./DeviceInfoItem";
import { useRef } from "react";
import { ChangePhotoIcon } from "@/shared/assets";

export const DeviceForm = ({ onClose }: FormSchema) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
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

    return (
        <form
            onSubmit={handleSubmitForm}
            className="flex flex-col gap-[20px] pl-6"
        >
            <h1 className="text-white pt-8 text-xl font-bold">
                Добавить устройство:
            </h1>
            <div className="flex gap-8">
                <div
                    className="group relative w-[200px] h-[200px] border-2 border-[#3A177F] rounded-xl bg-[#1A1238]/20 overflow-hidden 
                    cursor-pointer transition-all duration-300 hover:border-[#5120B8] hover:shadow-lg p-4"
                    onClick={() => fileInputRef?.current?.click()}
                >
                    {device.img && (
                        <>
                            <ImagePreview
                                file={device.img}
                                className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-50"
                            />
                            <div
                                className="absolute inset-0 flex items-center justify-center opacity-0 
                                group-hover:opacity-100 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <ChangePhotoIcon />
                                    <span className="text-white text-sm font-medium">
                                        Изменить фото
                                    </span>
                                </div>
                            </div>
                        </>
                    )}
                    {!device.img && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <ChangePhotoIcon />
                                <span className="text-white text-sm font-medium">
                                    Добавить фото
                                </span>
                            </div>
                        </div>
                    )}
                    <Input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                </div>
                <div className="flex flex-col gap-[30px]">
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
                </div>
            </div>
            <Input
                noWrap
                className="max-w-[450px] custom-input p-3"
                placeholder="Название устройства"
                value={device.name}
                onChange={(e) => handleChange("name", e.target.value)}
            />
            <Input
                noWrap
                className="max-w-[450px] custom-input p-3"
                placeholder="Цена"
                value={device.price}
                onChange={(e) => handleChange("price", e.target.value)}
            />
            <Button
                type="button"
                onClick={handleAddInfo}
                className="w-[175px] h-[40px] cursor-pointer text-center text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition"
                text="Добавить свойства"
            />
            <div className="flex flex-col gap-[10px]">
                {info.map((i) => (
                    <DeviceInfoItem
                        key={i.id}
                        item={i}
                        onChange={handleChangeInfo}
                        onRemove={handleRemoveInfo}
                    />
                ))}
            </div>
            <div className="flex justify-end mb-6 mr-2 gap-[10px]">
                <Button
                    className="apply-button"
                    type="submit"
                    text="Добавить"
                />
                <Button
                    className="cancel-button"
                    onClick={onClose}
                    text="Закрыть"
                />
            </div>
        </form>
    );
};
