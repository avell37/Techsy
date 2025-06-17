export interface ButtonSchema {
    className?: string;
    text?: string | number;
    children?: React.ReactNode;
    onClick?: () => void;
    type?: "submit" | "button";
    noWrap?: boolean;
    disabled?: boolean;
}