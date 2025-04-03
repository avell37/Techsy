interface ButtonProps {
    className: string;
    text?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    text,
    children,
    onClick,
}) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
            {children}
        </button>
    );
};
