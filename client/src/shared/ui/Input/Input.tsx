import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    children?: React.ReactNode;
    noWrap?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ noWrap, children, ...props }, ref) => {
        if (noWrap) return <input ref={ref} {...props} />;

        return (
            <div className="relative">
                {children}
                <input ref={ref} {...props} />
            </div>
        );
    }
);
