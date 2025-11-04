import { Form, FormInputController } from "@/shared/ui";
import { FormWrapper } from "@/shared/ui/custom";
import { UseFormReturn } from "react-hook-form";

interface EmailFormProps {
    form: UseFormReturn<{email: string}>;
    onSubmit: (data: string) => void;
}

export const EmailForm = ({ form, onSubmit }: EmailFormProps) => {
    const handleFormSubmit = (data: {email: string}) => {
        onSubmit(data.email);
    }

    return (
        <Form {...form}>
            <FormWrapper
                handleSubmit={form.handleSubmit(handleFormSubmit)}
                buttonText="Обновить"
                withClose
            >
                <FormInputController 
                    name="email"
                    label="Новая почта"
                    className="custom-input w-full"
                    control={form.control}
                />
            </FormWrapper>
        </Form>
    )
}
