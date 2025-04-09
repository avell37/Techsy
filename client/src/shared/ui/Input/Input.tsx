import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    children?: React.ReactNode;
    noWrap?: boolean;
}

export const Input: React.FC<InputProps> = ({ noWrap, children, ...props }) => {
    if (noWrap) return <input {...props} />;

    return (
        <div className="relative">
            {children}
            <input {...props} />
        </div>
    );
};
