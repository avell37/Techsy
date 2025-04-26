import { Header } from "@/widgets/Header/ui/Header";
import { Button } from "@/shared/ui/Button/Button";
import { Modal } from "@/features/ManageModal/ui/Modal";
import { useModal } from "@/features/ManageModal/model/useModal";

export const AdminPage = () => {
    const { isOpen, contentType, openModal, closeModal } = useModal();

    return (
        <div className="relative flex flex-col gap-[50px]">
            <Header />
            <div className="flex flex-col gap-[50px] justify-center items-center">
                <p className="text-white font-bold text-4xl">
                    Привет, босс! Что нового хочешь добавить?
                </p>
                <div className="flex flex-col items-center gap-[20px] w-full">
                    <Button
                        className="max-w-[500px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                        onClick={() => openModal("addBrand")}
                        text="Добавить бренд"
                    />

                    <Button
                        className="max-w-[500px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                        onClick={() => openModal("addType")}
                        text="Добавить тип"
                    />
                    <Button
                        className="max-w-[500px] w-full h-[40px] bg-[#5120B8] text-white rounded-full"
                        onClick={() => openModal("addDevice")}
                        text="Добавить устройство"
                    />
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
