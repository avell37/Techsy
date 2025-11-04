import { SpinnerAnimation } from "./SpinnerAnimation"

interface SpinnerProps {
    width: string;
    height: string;
    className?: string;
    spinnerClassName?: string;
}

export const Spinner = ({ width, height, className, spinnerClassName }: SpinnerProps) => {
    return (
        <div className={`flex justify-center items-center ${className}`}>
            <SpinnerAnimation width={width} height={height} className={spinnerClassName} />
        </div>
    )
}
