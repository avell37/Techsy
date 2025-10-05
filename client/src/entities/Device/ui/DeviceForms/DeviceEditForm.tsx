import { FormInputController } from '@/shared/ui'
import { FormDropdownController } from '@/shared/ui/FormControllers/ui/FormDropdownController'
import { FormWrapper } from '@/shared/ui/FormWrappers/FormWrapper'
import { FormImageUploader } from '@/shared/ui/ImagePreview/ui/FormImageUploader'
import { StoreCardEdit } from '@/shared/ui/StoreCard/StoreCardEdit'
import { FormTextarea } from '@/shared/ui/ui-lib/Textarea/FormTextarea'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Form } from 'react-hook-form'
import { useDeviceEdit } from '../../model/hooks/useDeviceEdit'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/shared/hooks'
import { selectDeviceById } from '../../model/selectors/selectDeviceById'
import { useEffect } from 'react'
import { DeviceFormProps } from '../../model/types/DeviceFormProps'

export const DeviceEditForm = () => {
    const { id } = useParams<{ id: string }>();
    const { form, types, brands, handleUpdateDevice, handleSubmit } = useDeviceEdit();
    const device = useAppSelector(selectDeviceById(id));

    const onSubmit = (data: DeviceFormProps) => {
        if (device) {
            handleUpdateDevice(device.id, data)
        }
    }

    // useEffect(() => {
    //     if (device) {
    //         form.reset({ 
    //             name: device.name,
    //             description: device.description,
    //             color: device.color,
    //             storage: device.storage,
    //             price: device.price,
    //             brandId: device.brandId,
    //             typeId: device.typeId,
    //             img: device.img
    //         })
    //     }
    // }, [device])

    return (
        <div className="flex w-full min-h-fit mt-5">
                <StoreCardEdit
                    title="Добавить устройство"
                    subtitle="Добавить информацию об устройстве"
                >
                    <Form {...form}>
                        <FormWrapper
                            handleSubmit={handleSubmit(onSubmit)}
                            buttonText="Сохранить"
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
