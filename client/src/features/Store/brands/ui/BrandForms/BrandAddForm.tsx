import { Form, FormInputController } from "@/shared/ui"
import { FormWrapper, StoreCardEdit } from "@/shared/ui/custom"
import { useBrandAdd } from "../../model/hooks/useBrandAdd";

export const BrandAddForm = () => {
    const { form, handleSubmit, onSubmit } = useBrandAdd();

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
