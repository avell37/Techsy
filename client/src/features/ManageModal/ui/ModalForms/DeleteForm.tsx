import { Button, Dropdown } from "@/shared/ui";
import { DeleteSchema } from "../../model/types/ModalSchema";
import { useNotification } from "@/shared/hooks";
import { useState } from "react";
import { IBrand } from "@/shared/types";
import { useDeleteEntity } from "../../hooks/useDeleteEntity";

export const DeleteForm = ({ entityType, onClose }: DeleteSchema) => {
    const [selected, setSelected] = useState<IBrand | null>(null);
    const [loading, setLoading] = useState(false);
    const { items, remove } = useDeleteEntity(entityType);
    const { notifySuccess, notifyError, notifyWarn } = useNotification();

    const handleDelete = async () => {
        if (!selected) return notifyWarn("Выберите элемент для удаления");

        try {
            setLoading(true);
            await remove(selected.id);
            notifySuccess("Успешно удалено!");
            onClose();
        } catch (err) {
            console.error(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="p-4 flex flex-col gap-[30px] h-full">
            <h2 className="font-bold text-xl text-white mt-4">
                Удалить {entityType}
            </h2>
            <Dropdown
                trigger={
                    <Button
                        type="button"
                        className="p-2 rounded-md max-w-[175px] w-full h-[40px] border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition font-bold cursor-pointer text-white"
                        text={selected ? selected?.name : "Выбрать..."}
                    />
                }
                items={items.map((item) => ({
                    text: item.name,
                    onClick: () => setSelected(item),
                }))}
                triggerClassname="max-w-[175px]"
                className="flex justify-center"
            />
            <div className="flex justify-end mt-16 mb-6 mr-2 gap-[10px]">
                <Button
                    className="rounded-md max-w-[100px] w-full h-[40px] bg-[#5120B8] font-bold focus:outline-none cursor-pointer text-white"
                    type="submit"
                    text={loading ? "Удаление..." : "Удалить"}
                    disabled={!selected || loading}
                    onClick={handleDelete}
                />
                <Button
                    className="rounded-md max-w-[100px] w-full h-[40px] bg-red-900 font-bold focus:outline-none cursor-pointer text-white"
                    text="Закрыть"
                    onClick={onClose}
                />
            </div>
        </form>
    );
};
