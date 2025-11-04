import { LOGIN_ROUTE } from "@/shared/config/consts";
import { FormInputController } from "@/shared/ui";
import { useRegistration } from "../../model/hooks/useRegistration";
import { FormAuthWrapper } from "@/shared/ui/custom";

export const Registration = () => {
    const { form, fields, onSubmit } = useRegistration();

    return (
        <div className="flex flex-col gap-[20px] text-start bg-gradient p-8 rounded-2xl w-full max-w-[450px] min-w-[290px]">
            <p className="text-center text-3xl font-bold text-purple-500 mb-10 max-sm:text-xl max-md:mb-6 max-sm:mb-4">
                techsy
            </p>
            <div className="flex flex-col gap-[10px] text-center text-white font-bold">
                <h1 className="text-2xl max-md:text-xl max-sm:text-lg">Регистрация</h1>
                <p className="text-lg mb-4 max-md:text-md max-sm:text-sm">Начнем наше знакомство?</p>
            </div>
            <FormAuthWrapper
                buttonText="Зарегистрироваться"
                linkText="Есть аккаунт?"
                route={LOGIN_ROUTE}
                form={form}
                onSubmit={onSubmit}
            >
                {fields.map((field) => (
                    <FormInputController
                        key={field.name}
                        {...field}
                        control={form.control}
                        className="pl-8 custom-input w-full"
                    />
                ))}
            </FormAuthWrapper>
        </div>
    );
};
