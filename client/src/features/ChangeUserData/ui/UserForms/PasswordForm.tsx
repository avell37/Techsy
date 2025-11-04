import { Form, FormInputController } from "@/shared/ui";
import { UseFormReturn } from "react-hook-form";
import type { PasswordFormData } from "../../model/hooks/useChangeUserData";
import { FormWrapper } from "@/shared/ui/custom";

interface PasswordFormProps {
    form: UseFormReturn<PasswordFormData>;
    onSubmit: (data: PasswordFormData) => void;
}

export const PasswordForm = ({ form, onSubmit }: PasswordFormProps) => {
    const handleFormSubmit = (data: PasswordFormData) => {
        onSubmit(data);
    }

    return (
        <Form {...form}>
            <FormWrapper
                handleSubmit={form.handleSubmit(handleFormSubmit)}
                buttonText="Обновить"
                withClose
            >
                <FormInputController 
                    name="oldPassword"
                    type="password"
                    label="Старый пароль"
                    className="custom-input w-full"
                    control={form.control}
                />
                <FormInputController 
                    name="newPassword"
                    type="password"
                    label="Новый пароль"
                    className="custom-input w-full"
                    control={form.control}
                />
                <FormInputController 
                    name="repeatPassword"
                    type="password"
                    label="Повторите новый пароль"
                    className="custom-input w-full"
                    control={form.control}
                />
            </FormWrapper>
        </Form>
    )
}
