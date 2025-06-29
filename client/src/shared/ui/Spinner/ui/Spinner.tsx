import { SpinnerAnimation } from "@/shared/assets"
import { SpinnerProps } from "../model/SpinnerProps"

export const Spinner = ({ width, height, className }: SpinnerProps) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <SpinnerAnimation width={width} height={height} className={className} />
        </div>
    )
}
