import { FormattedDateSchema } from "../model/FormattedDateSchema";

export const FormattedDate = ({
    date,
    withTime = true,
    className,
}: FormattedDateSchema) => {
    const formatted = new Date(date).toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        ...(withTime && {
            hour: "2-digit",
            minute: "2-digit",
        }),
    });

    return <span className={className}>{formatted}</span>;
};
