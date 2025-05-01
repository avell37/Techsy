interface ButtonProps {
    className?: string;
    text?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    type?: "submit" | "button";
    noWrap?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    text,
    children,
    onClick,
    type,
    noWrap,
}) => {
    if (noWrap)
        return (
            <button type={type} className={className} onClick={onClick}>
                {text}
            </button>
        );
    return (
        <button type={type} className={className} onClick={onClick}>
            {text}
            {children}
        </button>
    );
};
