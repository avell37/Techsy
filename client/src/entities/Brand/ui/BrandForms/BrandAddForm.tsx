import { FormWrapper } from "@/shared/ui/FormWrappers/FormWrapper"
import { StoreCardEdit } from "@/shared/ui/StoreCard/StoreCardEdit"
import { Form } from "@/shared/ui/ui-lib/Form/Form"
import { BrandFormProps } from "../../model/types/BrandFormProps"
import { useBrandAdd } from "../../model/hooks/useBrandAdd"
import { FormInputController } from "@/shared/ui"

export const BrandAddForm = () => {

    const { form, handleAddBrand, handleSubmit } = useBrandAdd();

    const onSubmit = (data: BrandFormProps) => handleAddBrand(data.name)

    return (
        <div className="flex w-full min-h-fit mt-5">
            <StoreCardEdit
                title="Добавить бренд"
                subtitle="Добавить информацию о бренде"
            >
                    <Form {...form}>
                        <FormWrapper
                            handleSubmit={handleSubmit(onSubmit)}
                            buttonText="Создать"
                        >
                            <div className="mt-6">
                                <FormInputController
                                    name="name"
                                    label="Название бренда"
                                    control={form.control}
                                    placeholder="Введите бренд"
                                    className="custom-input mt-2"
                                />
                            </div>
                        </FormWrapper>
                    </Form>
            </StoreCardEdit>
        </div>
    )
}
