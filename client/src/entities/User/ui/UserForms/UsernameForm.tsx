import { Form, FormInputController } from "@/shared/ui";
import { FormWrapper } from "@/shared/ui/FormWrappers/FormWrapper";
import { UseFormReturn } from "react-hook-form";

interface UsernameFormProps {
    form: UseFormReturn<{username: string}>;
    onSubmit: (data: string) => void;
}

export const UsernameForm = ({ form, onSubmit }: UsernameFormProps) => {
    const handleFormSubmit = (data: {username: string}) => {
        onSubmit(data.username);
    }

    return (
        <Form {...form}>
            <FormWrapper
                handleSubmit={form.handleSubmit(handleFormSubmit)}
                buttonText="Обновить"
                withClose
            >
                <FormInputController 
                    name="username"
                    label="Изменить имя пользователя"
                    placeholder="Введите новое имя пользователя"
                    className="custom-input mt-3"
                    control={form.control}
                />
            </FormWrapper>
        </Form>
    )
}
