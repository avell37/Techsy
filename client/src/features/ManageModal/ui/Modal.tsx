import { XMarkIcon } from "@/shared/assets/icons/XMarkIcon";
import { ModalSchema } from "../model/types/ModalSchema";
import { modalComponents } from "../utils/modalComponents";

export const Modal = ({ isOpen, onClose, contentType }: ModalSchema) => {
    if (!isOpen || !contentType) return null;

    const Component = modalComponents[contentType];

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[500]">
            <div className="relative w-[500px] h-fit max-h-[800px] border border-primary-900/30 
            rounded-md filters-bg-gradient overflow-y-auto custom-overflow">
                <Component
                    onClose={onClose}
                />
                <p
                    className="text-white absolute right-4 top-8 font-bold"
                    onClick={onClose}
                >
                    <XMarkIcon
                        width="25px"
                        height="25px"
                        className="stroke-white cursor-pointer 
                        hover:stroke-gray-400 transition-all duration-300"
                    />
                </p>
            </div>
        </div>
    );
};
