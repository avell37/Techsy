import { FormInputController, FormTextarea } from '@/shared/ui'
import { FormProvider } from 'react-hook-form'
import { FormDropdownController, FormImageUploader, FormWrapper, StoreCardEdit } from '@/shared/ui/custom'
import { useDeviceEdit } from '../../model/hooks/useDeviceEdit'

export const DeviceEditForm = () => {
    const { form, types, brands, handleSubmit, onSubmit } = useDeviceEdit();

    return (
        <div className="flex w-full min-h-fit mt-5">
            <StoreCardEdit
                title="Добавить устройство"
                subtitle="Добавить информацию об устройстве"
            >
                <FormProvider {...form}>
                    <FormWrapper
                        buttonText="Сохранить"
                        handleSubmit={handleSubmit(onSubmit)}
                    >
                        <FormImageUploader 
                            name="img"
                            control={form.control}
                        />
                        <div className="grid grid-cols-5 gap-4">
                            <FormInputController
                                name="name"
                                label="Название устройства"
                                placeholder="Введите название"
                                className="custom-input"
                                control={form.control}
                            />
                            <FormDropdownController
                                name="brandId"
                                label="Бренд"
                                className="w-full"
                                control={form.control}
                                items={brands}
                            />
                            <FormDropdownController
                                name="typeId"
                                label="Тип"
                                control={form.control}
                                items={types}
                            />
                            <FormInputController
                                name="color"
                                label="Цвет"
                                placeholder="Введите цвет"
                                className="custom-input"
                                control={form.control}
                            />
                            <FormInputController
                                name="storage"
                                label='Память'
                                placeholder="Введите память (в ГБ)"
                                className="custom-input"
                                control={form.control}
                            />
                            <FormInputController
                                name="price"
                                label="Цена"
                                placeholder="Введите цену (в рублях)"
                                className="custom-input"
                                control={form.control}
                            />
                        </div>
                        <FormTextarea 
                            name="description"
                            label="Описание устройства"
                            control={form.control}
                        />
                    </FormWrapper>
                </FormProvider>
            </StoreCardEdit>
        </div>
    )
}
