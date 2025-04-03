import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    children?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ children, ...props }) => {
    return (
        <div className="relative">
            {children}
            <input {...props} />
        </div>
    );
};
