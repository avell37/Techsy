import { Form, FormInputController, FormTextarea } from "@/shared/ui"
import { FormDropdownController, FormImageUploader, FormWrapper, StoreCardEdit } from "@/shared/ui/custom"
import { useDeviceAdd } from "../../model/hooks/useDeviceAdd";

export const DeviceAddForm = () => {
    const { form, brands, types, handleSubmit, onSubmit } = useDeviceAdd();

    return (
        <div className="flex w-full min-h-fit mt-5">
            <StoreCardEdit
                title="Добавить устройство"
                subtitle="Добавить информацию об устройстве"
            >
                <Form {...form}>
                    <FormWrapper
                        buttonText="Создать"
                        handleSubmit={handleSubmit(onSubmit)}
                    >
                        <FormImageUploader 
                            name="img"
                            control={form.control}
                        />
                        <div className="flex flex-wrap gap-4">
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
                                className="max-w-[175px] w-full"
                                control={form.control}
                                items={brands}
                            />
                            <FormDropdownController
                                name="typeId"
                                label="Тип"
                                className="max-w-[175px] w-full"
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
                                label="Память"
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
                </Form>
            </StoreCardEdit>
        </div>
    )
}
