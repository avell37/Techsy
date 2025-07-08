import { Input, Button, Dropdown, ImagePreview, FormInputController } from "@/shared/ui";
import { DeviceInfoItem } from "./DeviceInfoItem";
import { useRef } from "react";
import { ChangePhotoIcon } from "@/shared/assets";
import { useDeviceForm } from "../hooks/useDeviceForm";

export const DeviceForm = ({ onClose }: { onClose?: () => void }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const {
        img,
        brandName,
        typeName,
        control,
        brandItems,
        typeItems,
        info,
        errors,
        handleFileChange,
        handleSubmitForm,
        handleAddInfo,
        handleChangeInfo,
        handleRemoveInfo,
    } = useDeviceForm(onClose);
    const handleFileUpload = () => fileInputRef?.current?.click()

    return (
        <form
            className="flex flex-col gap-[20px] pl-6 max-sm:px-2"
            onSubmit={handleSubmitForm}
        >
            <h1 className="text-white pt-8 text-xl font-bold max-sm:text-sm max-sm:pt-4 max-sm:mt-[3px]">
                Добавить устройство:
            </h1>
            <div className="flex gap-8 max-sm:flex-col">
                <div
                    className="group relative w-[200px] h-[200px] border-2 border-indigo-900 rounded-xl 
                    bg-primary-300/20 overflow-hidden cursor-pointer transition-all duration-300 
                    hover:border-primary-900 hover:shadow-lg p-4"
                    onClick={handleFileUpload}
                >
                    {img ? (
                        <>
                            <ImagePreview
                                file={img}
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
                    ) : (
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
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="flex flex-col gap-[30px]">
                    <Dropdown
                        trigger={
                            <Button
                                type="button"
                                className="w-[175px] h-[40px] cursor-pointer text-center text-white rounded-md border-1 
                                border-primary-900/30 hover:border-primary-900 hover:bg-primary-300/30 
                                focus:border-light-purple transition"
                                text={brandName}
                            />
                        }
                        items={brandItems}
                        className="left"
                        triggerClassname="max-w-[175px] max-sm:text-sm"
                    />
                    <Dropdown
                        trigger={
                            <Button
                                type="button"
                                className="w-[175px] h-[40px] cursor-pointer text-center text-white rounded-md border-1 
                                border-primary-900/30 hover:border-primary-900 hover:bg-primary-300/30 
                                focus:border-light-purple transition"
                                text={typeName}
                            />
                        }
                        items={typeItems}
                        className="left"
                        triggerClassname="max-w-[175px] max-sm:text-sm"
                    />
                </div>
            </div>
            <FormInputController
                name="name"
                control={control}
                type="text"
                className="max-w-[410px] w-full custom-input p-3"
                placeholder="Название устройства"
                errors={errors}
            />
            <FormInputController
                name="price"
                control={control}
                type="text"
                className="max-w-[410px] w-full custom-input p-3"
                placeholder="Цена"
                errors={errors}
            />
            <Button
                type="button"
                className="w-[175px] h-[40px] cursor-pointer text-center text-white rounded-md border-1 max-sm:text-sm
                border-primary-900/30 hover:border-primary-900 hover:bg-primary-300/30 focus:border-light-purple transition"
                text="Добавить свойства"
                onClick={handleAddInfo}
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
            <div className="flex justify-end mb-6 mr-4 gap-[10px]">
                <Button
                    className="apply-button"
                    type="submit"
                    text="Добавить"
                />
                <Button
                    className="cancel-button"
                    text="Закрыть"
                    onClick={onClose}
                />
            </div>
        </form>
    );
};