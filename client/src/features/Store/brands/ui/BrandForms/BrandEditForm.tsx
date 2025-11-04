import { Form, FormInputController, Spinner } from "@/shared/ui"
import { FormWrapper, StoreCardEdit } from "@/shared/ui/custom"
import { useBrandEdit } from "../../model/hooks/useBrandEdit"

export const BrandEditForm = () => {
    const { brand, form, handleSubmit, onSubmit } = useBrandEdit();

    return (
        <div className="flex w-full min-h-fit mt-5">
            <StoreCardEdit
                title="Изменить бренд"
                subtitle="Изменить информацию о бренде"
            >
                {!brand ? (
                    <div className="flex justify-center items-center mt-6 w-full">
                        <Spinner
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
                                    label="Название бренда"
                                    control={form.control}
                                    placeholder="Введите бренд"
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
