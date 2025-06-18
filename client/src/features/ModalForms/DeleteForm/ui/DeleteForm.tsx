import { Button, Dropdown } from "@/shared/ui";
import { DeleteSchema } from "../../../ManageModal/model/types/ModalSchema";
import { useDeleteForm } from "../hooks/useDeleteForm";
import { Controller } from "react-hook-form";

export const DeleteForm = ({
    entityType,
    entityName,
    onClose,
}: DeleteSchema) => {
    const { control, handleSubmit, handleDeleteFormSubmit, errors, items } =
        useDeleteForm({ entityType, onClose });
    return (
        <form
            onSubmit={handleSubmit(handleDeleteFormSubmit)}
            className="p-4 flex flex-col gap-[30px] h-full"
        >
            <h2 className="font-bold text-xl text-white mt-4">
                Удалить {entityName}
            </h2>
            <div className="divider"></div>
            <div className="flex flex-col gap-[10px] bg-[#1A1238]/50 p-6 rounded-xl border border-[#5120B8]/30">
                <p className="text-gray-300">Пожалуйста, выберите {entityName} для удаления. Это действие нельзя будет отменить.</p>
                <Controller
                    name="entity"
                    control={control}
                    render={({ field }) => {
                        const selectedItem = items.find(
                            (item) => item.id === field.value
                        );
                        return (
                            <div className="flex flex-col gap-[10px]">
                                <label className="text-gray-400 text-sm block">
                                    Выберите элемент:
                                </label>
                                <Dropdown
                                    trigger={
                                        <Button
                                            type="button"
                                            className="p-2 rounded-md max-w-[175px] w-full h-[40px] border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition font-bold cursor-pointer text-white"
                                            text={
                                                selectedItem
                                                    ? selectedItem?.name
                                                    : "Выбрать..."
                                            }
                                        />
                                    }
                                    items={items.map((item) => ({
                                        text: item.name,
                                        onClick: () => field.onChange(item.id),
                                    }))}
                                    triggerClassname="max-w-[175px]"
                                    className="flex justify-center"
                                />
                                {errors.entity && (
                                    <span className="text-red-500 text-sm mt-1">
                                        {errors.entity.message}
                                    </span>
                                )}
                            </div>
                        );
                    }}
                />
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-400 text-sm">⚠️Внимание: Удаление элемента повлечет за собой удаление всех связанных данных.</p>
            </div>
            <div className="flex justify-end mb-6 mr-2 gap-[10px]">
                <Button className="apply-button" type="submit" text="Удалить" />
                <Button
                    className="cancel-button"
                    text="Закрыть"
                    onClick={onClose}
                />
            </div>
        </form>
    );
};
