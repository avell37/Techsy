import { ButtonSchema } from "../model/types/ButtonSchema";

export const Button: React.FC<ButtonSchema> = ({
    className,
    text,
    children,
    onClick,
    type,
    noWrap,
    disabled,
}) => {
    if (noWrap)
        return (
            <button
                type={type}
                className={className}
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        );
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
            {children}
        </button>
    );
};
