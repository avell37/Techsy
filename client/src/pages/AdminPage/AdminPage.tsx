import { Header } from "@/widgets/Header";
import { Button } from "@/shared/ui";
import { Modal } from "@/features/ManageModal";
import { useModal } from "@/shared/hooks";

export const AdminPage = () => {
    const { isOpen, contentType, openModal, closeModal } = useModal();

    return (
        <div className="relative flex flex-col gap-[50px]">
            <Header />
            <div className="flex flex-col gap-[50px] justify-center items-center">
                <p className="text-white font-bold text-4xl">
                    Привет! Что нового хочешь сделать сегодня?
                </p>
                <div className="flex flex-col items-center gap-[20px] w-full">
                    <div className="flex justify-center items-center w-full gap-[20px]">
                        <Button
                            className="max-w-[240px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                            onClick={() => openModal("addBrand")}
                            text="Добавить бренд"
                        />
                        <Button
                            className="max-w-[240px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                            onClick={() => openModal("deleteBrand")}
                            text="Удалить бренд"
                        />
                    </div>
                    <div className="flex justify-center items-center w-full gap-[20px] text-white">
                        <Button
                            className="max-w-[240px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                            onClick={() => openModal("addType")}
                            text="Добавить тип"
                        />
                        <Button
                            className="max-w-[240px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                            onClick={() => openModal("deleteType")}
                            text="Удалить тип"
                        />
                    </div>
                    <div className="flex justify-center items-center w-full gap-[20px]">
                        <Button
                            className="max-w-[240px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                            onClick={() => openModal("addDevice")}
                            text="Добавить устройство"
                        />
                        <Button
                            className="max-w-[240px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                            onClick={() => openModal("deleteDevice")}
                            text="Удалить устройство"
                        />
                    </div>
                    <Modal
                        isOpen={isOpen}
                        onClose={closeModal}
                        contentType={contentType}
                    />
                </div>
            </div>
        </div>
    );
};
