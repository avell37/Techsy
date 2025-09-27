import { FormWrapper } from "@/shared/ui/FormWrappers/FormWrapper"
import { StoreCardEdit } from "@/shared/ui/StoreCard/StoreCardEdit"
import { Input } from "@/shared/ui/ui-lib/Input/Input"
import { Label } from "@/shared/ui/ui-lib/Label/Label"
import { Form } from "@/shared/ui/ui-lib/Form/Form"
import { BrandFormProps } from "../model/types/BrandFormProps"
import { useBrandAdd } from "../model/hooks/useBrandAdd"

export const BrandAddForm = () => {

    const { form, handleAddBrand, handleSubmit, register, errors } = useBrandAdd();

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
                                <Label className="text-sm text-gray-300">
                                    Название бренда
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
