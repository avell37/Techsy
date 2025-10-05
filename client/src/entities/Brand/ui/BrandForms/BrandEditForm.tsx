import { StoreCardEdit } from "@/shared/ui/StoreCard/StoreCardEdit"
import { Form } from "@/shared/ui/ui-lib/Form/Form"
import { useEffect } from "react"
import { FormWrapper } from "@/shared/ui/FormWrappers/FormWrapper"
import { useParams } from "react-router-dom"
import { useAppSelector } from "@/shared/hooks"
import { SpinnerAnimation } from "@/shared/assets"
import { selectBrandById } from "../../model/selectors/selectBrandById"
import { useBrandEdit } from "../../model/hooks/useBrandEdit"
import { FormInputController } from "@/shared/ui"

export const BrandEditForm = () => {
    const { id } = useParams<{ id: string }>();
    const { form, handleUpdateBrand, handleSubmit } = useBrandEdit();
    const brand = useAppSelector(selectBrandById(id));

    const onSubmit = (data: { name: string }) => {
        if (brand) handleUpdateBrand(brand.id, data.name)
    }

    useEffect(() => {
        if (brand) form.reset({ name: brand.name })
    }, [brand])

    return (
        <div className="flex w-full min-h-fit mt-5">
            <StoreCardEdit
                title="Изменить бренд"
                subtitle="Изменить информацию о бренде"
            >
                {!brand ? (
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
