import { forwardRef } from "react";
import { InputSchema } from "../model/InputSchema";

export const Input = forwardRef<HTMLInputElement, InputSchema>(
    ({ noWrap, className, children, error, ...props }, ref) => {
        if (noWrap) return (
            <>
                <input ref={ref} className={`${className} ${error ? "border-red-500 flex flex-col" : ""}`} {...props} />
                {error && <span className="text-red-500 text-sm">{error}</span>}
            </>
        )
        return (
            <div className="relative">
                {children}
                <input ref={ref} className={`${className} ${error ? "border-red-500 flex flex-col" : ""}`} {...props} />
                {error && <span className="text-red-500 text-sm max-sm:text-xs">{error}</span>}
            </div>
        );
    }
);
