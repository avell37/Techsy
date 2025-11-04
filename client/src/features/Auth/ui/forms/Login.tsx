import { FormInputController } from "@/shared/ui";
import { REGISTRATION_ROUTE } from "@/shared/config/consts";
import { useLogin } from "../../model/hooks/useLogin";
import { FormAuthWrapper } from "@/shared/ui/custom";

export const Login = () => {
    const { form, fields, onSubmit } = useLogin();

    return (
        <div className="flex flex-col gap-[20px] text-start bg-gradient p-8 rounded-2xl w-full max-w-[450px] min-w-[290px] max-sm:p-6 max-md:gap-[10px]">
            <p className="text-center text-2xl font-bold text-purple-500 mb-10 max-sm:text-xl max-md:mb-6 max-sm:mb-4">
                techsy
            </p>
            <div className="flex flex-col gap-[10px] text-center text-white font-bold">
                <h1 className="text-2xl max-md:text-xl max-sm:text-lg">Вход</h1>
                <p className="text-lg mb-4 max-md:text-md max-sm:text-sm">Уже были тут?</p>
            </div>
            <FormAuthWrapper
                buttonText="Войти"
                linkText="Нет аккаунта?"
                route={REGISTRATION_ROUTE}
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
