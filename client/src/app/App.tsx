import { Button } from "@/shared/components/Button/Button"

export const App = () => {
    return (
        <>
            <div className="flex justify-center">Techsy</div>
            <Button
            className="p-8 bg-purple-500 text-white border-black border-2"
            text="Привет" />
        </>
    )
}
