import { Button, Divider } from "@/shared/ui";
import { useDeleteForm } from "../hooks/useDeleteForm";
import { FormDropdownController } from "@/shared/ui/FormControllers/ui/FormDropdownController";
import { DeleteProps } from "../types/DeleteProps";

export const DeleteForm = ({
    entityType,
    entityName,
    onClose,
}: DeleteProps) => {
    const { control, errors, items, handleDeleteFormSubmit } =
        useDeleteForm({ entityType, onClose });
    return (
        <form
            className="p-4 flex flex-col gap-[30px] h-full"
            onSubmit={handleDeleteFormSubmit}
        >
            <h2 className="font-bold text-xl text-white mt-4 max-sm:text-sm max-sm:pt-4 max-sm:mt-[3px]">
                Удалить {entityName}
            </h2>
            <Divider variant="h-[3px] w-full" />
            <div className="flex flex-col gap-[10px] bg-primary-300/50 p-6 rounded-xl border border-primary-900/30">
                <FormDropdownController
                    name="entity"
                    control={control}
                    items={items}
                    errors={errors}
                    label={`Пожалуйста, выберите ${entityName} для удаления. Это действие нельзя будет отменить.`}
                    placeholder="Выбрать..."
                />
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-400 text-sm">⚠️Внимание: Удаление элемента повлечет за собой удаление всех связанных данных.</p>
            </div>
            <div className="flex justify-end mb-6 mr-4 gap-[10px]">
                <Button
                    className="apply-button"
                    type="submit"
                    text="Удалить"
                />
                <Button
                    className="cancel-button"
                    text="Закрыть"
                    onClick={onClose}
                />
            </div>
        </form>
    );
};
