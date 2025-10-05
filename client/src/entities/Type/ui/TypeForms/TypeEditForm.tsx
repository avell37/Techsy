import { StoreCardEdit } from "@/shared/ui/StoreCard/StoreCardEdit"
import { Form } from "@/shared/ui/ui-lib/Form/Form"
import { useTypeEdit } from "../../model/hooks/useTypeEdit"
import { useEffect } from "react"
import { FormWrapper } from "@/shared/ui/FormWrappers/FormWrapper"
import { useParams } from "react-router-dom"
import { useAppSelector } from "@/shared/hooks"
import { selectTypeById } from "../../model/selectors/selectTypeById"
import { SpinnerAnimation } from "@/shared/assets"
import { FormInputController } from "@/shared/ui"

export const TypeEditForm = () => {
    const { id } = useParams<{ id: string }>();
    const { form, handleUpdateType, handleSubmit } = useTypeEdit();
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
                )}
            </StoreCardEdit>
        </div>
    )
}
