import { Button, FormInputController } from "@/shared/ui";
import { useBrandForm } from "../hooks/useBrandForm";

export const BrandForm = ({ onClose }: { onClose: () => void }) => {
    const { control, errors, handleBrandFormSubmit } = useBrandForm(onClose);

    return (
        <form onSubmit={handleBrandFormSubmit} className="flex flex-col gap-[30px] pl-6 max-sm:px-2">
            <h1 className="text-white pt-8 text-xl font-bold max-sm:text-sm max-sm:pt-4 max-sm:mt-[3px]">
                Добавить бренд:
            </h1>
            <FormInputController
                name="brand"
                control={control}
                type="text"
                className="max-w-[450px] w-full custom-input p-3"
                placeholder="Введите новый бренд"
                errors={errors} />
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
