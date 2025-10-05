import { FormWrapper } from "@/shared/ui/FormWrappers/FormWrapper"
import { StoreCardEdit } from "@/shared/ui/StoreCard/StoreCardEdit"
import { Input } from "@/shared/ui/ui-lib/Input/Input"
import { Label } from "@/shared/ui/ui-lib/Label/Label"
import { TypeFormProps } from "../../model/types/TypeFormProps"
import { Form } from "@/shared/ui/ui-lib/Form/Form"
import { useTypeAdd } from "../../model/hooks/useTypeAdd"
import { FormInputController } from "@/shared/ui"

export const TypeAddForm = () => {

    const { form, handleAddType, handleSubmit } = useTypeAdd();

    const onSubmit = (data: TypeFormProps) => handleAddType(data.name)

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
