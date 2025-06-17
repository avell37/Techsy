import { Button } from "@/shared/ui";
import { Modal, useModal } from "../../ManageModal";

export const AdminPanel = () => {
    const { isOpen, contentType, openModal, closeModal } = useModal();

    return (
        <div className="relative flex flex-col gap-[50px] mt-5 w-full h-full">
            <div className="w-full p-8 border-1 border-[#5120B8]/30 rounded-xl filters-bg-gradient shadow-lg h-full">
                <div className="flex flex-col items-center gap-[20px] w-full h-full">
                    <p className="text-white font-bold text-2xl">
                        Выберите, что вы хотите сделать
                    </p>
                    <div className="flex justify-center items-center w-full gap-[20px]">
                        <Button
                            className="flex-1 max-w-[240px] text-center border-1 border-[#5120B8]/30 hover:border-[#5120B8]
                                        hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-3 rounded-lg text-white
                                        outline-none transition-all duration-300"
                            onClick={() => openModal("addBrand")}
                            text="Добавить бренд"
                        />
                        <Button
                            className="flex-1 max-w-[240px] text-center border-1 border-[#5120B8]/30 hover:border-[#5120B8]
                                        hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-3 rounded-lg text-white
                                        outline-none transition-all duration-300"
                            onClick={() => openModal("deleteBrand")}
                            text="Удалить бренд"
                        />
                    </div>
                    <div className="flex justify-center items-center w-full gap-[20px] text-white">
                        <Button
                            className="flex-1 max-w-[240px] text-center border-1 border-[#5120B8]/30 hover:border-[#5120B8]
                                        hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-3 rounded-lg text-white
                                        outline-none transition-all duration-300"
                            onClick={() => openModal("addType")}
                            text="Добавить тип"
                        />
                        <Button
                            className="flex-1 max-w-[240px] text-center border-1 border-[#5120B8]/30 hover:border-[#5120B8]
                                        hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-3 rounded-lg text-white
                                        outline-none transition-all duration-300"
                            onClick={() => openModal("deleteType")}
                            text="Удалить тип"
                        />
                    </div>
                    <div className="flex justify-center items-center w-full gap-[20px]">
                        <Button
                            className="flex-1 max-w-[240px] text-center border-1 border-[#5120B8]/30 hover:border-[#5120B8]
                                        hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-3 rounded-lg text-white
                                        outline-none transition-all duration-300"
                            onClick={() => openModal("addDevice")}
                            text="Добавить устройство"
                        />
                        <Button
                            className="flex-1 max-w-[240px] text-center border-1 border-[#5120B8]/30 hover:border-[#5120B8]
                                        hover:bg-[#1A1238]/30 focus:border-[#4F45E4] p-3 rounded-lg text-white
                                        outline-none transition-all duration-300"
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
