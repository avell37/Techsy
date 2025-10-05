import { Form, FormInputController, Label } from "@/shared/ui"
import { FormWrapper } from "@/shared/ui/FormWrappers/FormWrapper"
import { StoreCardEdit } from "@/shared/ui/StoreCard/StoreCardEdit"
import { useDeviceAdd } from "../../model/hooks/useDeviceAdd"
import { FormDropdownController } from "@/shared/ui/FormControllers/ui/FormDropdownController"
import { FormImageUploader } from "@/shared/ui/ImagePreview/ui/FormImageUploader"
import { FormTextarea } from "@/shared/ui/ui-lib/Textarea/FormTextarea"
import { DeviceFormProps } from "../../model/types/DeviceFormProps"

export const DeviceAddForm = () => {
    const { form, handleSubmit, handleAddDevice, brands, types } = useDeviceAdd();

    const onSubmit = (data: DeviceFormProps) => handleAddDevice(data)

    return (
        <div className="flex w-full min-h-fit mt-5">
            <StoreCardEdit
                title="Добавить устройство"
                subtitle="Добавить информацию об устройстве"
            >
                <Form {...form}>
                    <FormWrapper
                        handleSubmit={handleSubmit(onSubmit)}
                        buttonText="Создать"
                    >
                        <FormImageUploader 
                            name="img"
                            control={form.control}
                        />
                        <div className="grid grid-cols-4 gap-4">
                            <div className="flex flex-col">
                                <Label className="text-sm text-gray-300 mb-2">
                                    Название устройства
                                </Label>
                                <FormInputController
                                    name="name"
                                    placeholder="Введите название"
                                    control={form.control}
                                    className="custom-input"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <Label className="text-sm text-gray-300 mb-2">
                                    Бренд
                                </Label>
                                <FormDropdownController
                                    name="brandId"
                                    className="w-full"
                                    control={form.control}
                                    items={brands}
                                />
                            </div>
                            <div className="flex flex-col">
                                <Label className="text-sm text-gray-300 mb-2">
                                    Тип
                                </Label>
                                <FormDropdownController
                                    name="typeId"
                                    control={form.control}
                                    items={types}
                                />
                            </div>
                            <div className="flex flex-col">
                                <Label className="text-sm text-gray-300 mb-2">
                                    Цвет
                                </Label>
                                <FormInputController
                                    name="color"
                                    placeholder="Введите цвет"
                                    control={form.control}
                                    className="custom-input"
                                />
                            </div>
                            <div className="flex flex-col">
                                <Label className="text-sm text-gray-300 mb-2">
                                    Память
                                </Label>
                                <FormInputController
                                    name="storage"
                                    placeholder="Введите память (в ГБ)"
                                    control={form.control}
                                    className="custom-input"
                                />
                            </div>
                            <div className="flex flex-col">
                                <Label className="text-sm text-gray-300 mb-2">
                                    Цена
                                </Label>
                                <FormInputController
                                    name="price"
                                    placeholder="Введите цену (в рублях)"
                                    control={form.control}
                                    className="custom-input"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                                <Label className="text-sm text-gray-300 mb-2">
                                    Описание устройства
                                </Label>
                                <FormTextarea 
                                    name="description"
                                    control={form.control}
                                />
                            </div>
                    </FormWrapper>
                </Form>
            </StoreCardEdit>
        </div>
    )
}
