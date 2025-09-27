import { StoreCardEdit } from "@/shared/ui/StoreCard/StoreCardEdit"
import { Form } from "@/shared/ui/ui-lib/Form/Form"
import { useTypeEdit } from "../model/hooks/useTypeEdit"
import { useEffect } from "react"
import { FormWrapper } from "@/shared/ui/FormWrappers/FormWrapper"
import { Input } from "@/shared/ui/ui-lib/Input/Input"
import { useParams } from "react-router-dom"
import { useAppSelector } from "@/shared/hooks"
import { selectTypeById } from "../model/selectors/selectTypeById"
import { SpinnerAnimation } from "@/shared/assets"
import { Label } from "@/shared/ui/ui-lib/Label/Label"

export const TypeEditForm = () => {
    const { id } = useParams<{ id: string }>();
    const { form, handleUpdateType, handleSubmit, register, errors } = useTypeEdit();
    const type = useAppSelector(selectTypeById(id));

    const onSubmit = (data: { name: string }) => {
        if (type) handleUpdateType(type.id, data.name)
    }

    useEffect(() => {
        if (type) form.reset({ name: type.name })
    }, [type])

    return (
        <div className="flex w-full min-h-fit mt-5">
            <StoreCardEdit
                title="Изменить тип"
                subtitle="Изменить информацию о типе"
            >
                {!type ? (
                    <div className="flex justify-center items-center mt-6 w-full">
                        <SpinnerAnimation
                            width="50px"
                            height="50px"
                        />
                    </div>
                ) : (
                    <Form {...form}>
                        <FormWrapper
                            handleSubmit={handleSubmit(onSubmit)}
                            buttonText="Сохранить"
                        >
                            <div className="mt-6">
                                <Label className="text-sm text-gray-300">
                                    Название типа
                                </Label>
                                <Input
                                    {...register("name")}
                                    defaultValue={type.name}
                                    className="custom-input mt-2"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                )}
                            </div>
                        </FormWrapper>
                    </Form>
                )}
            </StoreCardEdit>
        </div>
    )
}
