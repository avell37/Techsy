import { Input, Button } from "@/shared/ui";
import { useTypeForm } from "../hooks/useTypeForm";
import { Controller } from "react-hook-form";

export const TypeForm = ({ onClose }: { onClose: () => void }) => {
    const { control, handleSubmit, handleTypeFormSubmit, errors } = useTypeForm(onClose);

    return (
        <form onSubmit={handleSubmit(handleTypeFormSubmit)} className="flex flex-col gap-[30px] pl-6">
            <h1 className="text-white pt-8 text-xl font-bold">Добавить тип:</h1>
            <Controller
                name="type"
                control={control}
                render={({ field }) =>
                    <Input
                        {...field}
                        noWrap
                        className="max-w-[450px] custom-input p-3"
                        placeholder="Введите тип устройства"
                        error={errors?.type?.message}
                    />} />
            <div className="flex justify-end mb-6 mr-2 gap-[10px]">
                <Button
                    className="apply-button"
                    type="submit"
                    text="Добавить"
                />
                <Button
                    className="cancel-button"
                    onClick={onClose}
                    text="Закрыть"
                />
            </div>
        </form>
    );
};
