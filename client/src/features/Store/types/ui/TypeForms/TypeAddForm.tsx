import { useTypeAdd } from "../../model/hooks/useTypeAdd"
import { Form, FormInputController } from "@/shared/ui"
import { FormWrapper, StoreCardEdit } from "@/shared/ui/custom";

export const TypeAddForm = () => {
    const { form, handleSubmit, onSubmit } = useTypeAdd();

    return (
        <div className="flex w-full min-h-fit mt-5">
            <StoreCardEdit
                title="Добавить тип"
                subtitle="Добавить информацию о типе"
            >
                    <Form {...form}>
                        <FormWrapper
                            handleSubmit={handleSubmit(onSubmit)}
                            buttonText="Создать"
                        >
                            <div className="mt-6">
                                <FormInputController
                                    name="name"
                                    label="Название типа"
                                    control={form.control}
                                    placeholder="Введите тип"
                                    className="custom-input mt-2"
                                />
                            </div>
                        </FormWrapper>
                    </Form>
            </StoreCardEdit>
        </div>
    )
}
