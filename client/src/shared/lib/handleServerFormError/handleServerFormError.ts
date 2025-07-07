import { FieldValues, Path, UseFormSetError } from "react-hook-form";
import { isAxiosError } from "axios";

type FieldErrorMap<T extends FieldValues> = {
    [key: string]: Path<T>;
}

export function handleServerFormError<T extends FieldValues>(
    err: unknown,
    setError: UseFormSetError<T>,
    errorMap: FieldErrorMap<T>,
    fallback: (message: string) => void
) {
    if (isAxiosError<{ message?: string }>(err)) {
        const message = err.response?.data?.message || "Произошла ошибка. Попробуйте снова.";
        const lower = message.toLowerCase();

        for (const key in errorMap) {
            if (lower.includes(key.toLowerCase())) {
                setError(errorMap[key], {
                    type: "server",
                    message,
                });
                return;
            }
        }

        fallback(message);
    } else {
        fallback("Произошла непредвиденная ошибка.")
    }
}