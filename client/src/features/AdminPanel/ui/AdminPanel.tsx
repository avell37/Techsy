import { Button } from "@/shared/ui";
import { Modal, ModalContentType, useModal } from "../../ManageModal";

export const AdminPanel = () => {
    const { isOpen, contentType, openModal, closeModal } = useModal();

    const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value as ModalContentType;
        openModal(value);
    }

    return (
        <div className="relative flex flex-col gap-[50px] mt-5 w-full h-full">
            <div className="w-full p-8 border-1 border-primary-900/30 rounded-xl filters-bg-gradient shadow-lg h-full">
                <div className="flex flex-col items-center gap-[20px] w-full h-full">
                    <p className="text-white font-bold text-2xl max-sm:text-xl">
                        Выберите, что вы хотите сделать
                    </p>
                    <div className="flex justify-center items-center w-full gap-[20px] max-sm:text-sm">
                        <Button
                            value="addBrand"
                            className="admin-button"
                            onClick={handleOpenModal}
                            text="Добавить бренд"
                        />
                        <Button
                            value="deleteBrand"
                            className="admin-button"
                            onClick={handleOpenModal}
                            text="Удалить бренд"
                        />
                    </div>
                    <div className="flex justify-center items-center w-full gap-[20px]">
                        <Button
                            value="addType"
                            className="admin-button"
                            onClick={handleOpenModal}
                            text="Добавить тип"
                        />
                        <Button
                            value="deleteType"
                            className="admin-button"
                            onClick={handleOpenModal}
                            text="Удалить тип"
                        />
                    </div>
                    <div className="flex justify-center items-center w-full gap-[20px]">
                        <Button
                            value="addDevice"
                            className="admin-button"
                            onClick={handleOpenModal}
                            text="Добавить устройство"
                        />
                        <Button
                            value="deleteDevice"
                            className="admin-button"
                            onClick={handleOpenModal}
                            text="Удалить устройство"
                        />
                    </div>
                    <Modal
                        isOpen={isOpen}
                        contentType={contentType}
                        onClose={closeModal}
                    />
                </div>
            </div>
        </div>
    );
};
