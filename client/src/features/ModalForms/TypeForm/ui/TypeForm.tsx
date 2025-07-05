import { Button, FormInputController } from "@/shared/ui";
import { useTypeForm } from "../hooks/useTypeForm";

export const TypeForm = ({ onClose }: { onClose: () => void }) => {
    const { control, errors, handleTypeFormSubmit } = useTypeForm(onClose);
    return (
        <form onSubmit={handleTypeFormSubmit} className="flex flex-col gap-[30px] pl-6 max-sm:px-2">
            <h1 className="text-white pt-8 text-xl font-bold max-sm:text-sm max-sm:pt-4 max-sm:mt-[3px]">Добавить тип:</h1>
            <FormInputController
                name="type"
                control={control}
                type="text"
                className="max-w-[450px] w-full custom-input p-3"
                placeholder="Введите новый тип"
                errors={errors}
            />
            <div className="flex justify-end mb-6 mr-4 gap-[10px]">
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
