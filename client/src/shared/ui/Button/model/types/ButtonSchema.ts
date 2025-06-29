export interface ButtonSchema {
    className?: string;
    text?: string | number;
    children?: React.ReactNode;
    onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
    type?: "submit" | "button";
    noWrap?: boolean;
    disabled?: boolean;
    value?: string;
}