import { FormWrapper } from "@/shared/ui/FormWrappers/FormWrapper"
import { StoreCardEdit } from "@/shared/ui/StoreCard/StoreCardEdit"
import { Input } from "@/shared/ui/ui-lib/Input/Input"
import { Label } from "@/shared/ui/ui-lib/Label/Label"
import { TypeFormProps } from "../model/types/TypeFormProps"
import { Form } from "@/shared/ui/ui-lib/Form/Form"
import { useTypeAdd } from "../model/hooks/useTypeAdd"

export const TypeAddForm = () => {

    const { form, handleAddType, handleSubmit, register, errors } = useTypeAdd();

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
                                <Label className="text-sm text-gray-300">
                                    Название типа
                                </Label>
                                <Input
                                    {...register("name")}
                                    className="custom-input mt-2"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                )}
                            </div>
                        </FormWrapper>
                    </Form>
            </StoreCardEdit>
        </div>
    )
}
