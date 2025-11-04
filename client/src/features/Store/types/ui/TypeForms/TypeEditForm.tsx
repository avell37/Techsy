import { Form, FormInputController, Spinner } from "@/shared/ui"
import { FormWrapper, StoreCardEdit } from "@/shared/ui/custom"
import { useTypeEdit } from "../../model/hooks/useTypeEdit";

export const TypeEditForm = () => {
    const { form, type, handleSubmit, onSubmit } = useTypeEdit();

    return (
        <div className="flex w-full min-h-fit mt-5">
            <StoreCardEdit
                title="Изменить тип"
                subtitle="Изменить информацию о типе"
            >
                {!type ? (
                    <div className="flex justify-center items-center mt-6 w-full">
                        <Spinner
                            width="50px"
                            height="50px"
                            className="min-h-screen"
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
