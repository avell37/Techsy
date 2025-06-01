import { InputHTMLAttributes } from "react";

export interface InputSchema extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    children?: React.ReactNode;
    noWrap?: boolean;
}