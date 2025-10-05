import { FieldValues, UseFormSetError, Path } from "react-hook-form";

export function renderMissingErrors<T extends FieldValues>(
    message: string,
    setError: UseFormSetError<T>
) {
    const missing = message.split(":")[1]?.split(',').map((field) => field.trim());
    if (!missing?.length) return;

    missing.forEach(field => {
        setError(field as Path<T>, {
            type: "server",
            message
        })
    })
}