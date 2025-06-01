import { forwardRef } from "react";
import { InputSchema } from "../model/InputSchema";

export const Input = forwardRef<HTMLInputElement, InputSchema>(
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
