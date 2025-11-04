import { Link } from "react-router-dom";
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";
import { Form } from "../../external/Form/Form";
import { Button } from "../../external/Button/Button";
import { Divider } from "../Divider/Divider";
import { GoogleAuth } from "@/features/Auth";

interface FormWrapperProps<T extends FieldValues> {
    form: UseFormReturn<T>
    onSubmit: SubmitHandler<T>;
    children: React.ReactNode;
    buttonText: string;
    linkText: string;
    route: string;
}

export const FormAuthWrapper = <T extends FieldValues>({
    form,
    onSubmit, 
    children, 
    buttonText, 
    linkText, 
    route
}: FormWrapperProps<T>) => {
    return (
        <Form {...form}>
            <form
                className="flex flex-col gap-[20px]"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                {children}
                <Button
                    variant="ghost"
                    type="submit"
                    className="block apply-button-without-bg w-full rounded-xl border-1 border-primary-900/30 hover:border-primary-900"
                >
                    {buttonText}
                </Button>
                <div className="flex justify-center items-center gap-[10px]">
                    <Link
                        className="font-bold text-primary-900 max-sm:text-sm"
                        to={route}
                    >
                        {linkText}
                    </Link>
                </div>
                <div className="flex flex-col justify-center gap-[20px]">
                    <Divider variant="h-[2px] w-full" />
                    <p className="text-white text-center text-sm max-sm:text-xs">
                        продолжить с помощью:
                    </p>
                </div>
                <div className="flex justify-center items-center gap-[10px]">
                    <GoogleAuth />
                </div>
            </form>
        </Form>
    )
}
