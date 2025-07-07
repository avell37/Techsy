import { XMarkIcon } from "@/shared/assets/icons/XMarkIcon";
import { ModalSchema } from "../model/types/ModalSchema";
import { modalComponents } from "../utils/modalComponents";

export const Modal = ({ isOpen, onClose, contentType }: ModalSchema) => {
    if (!isOpen || !contentType) return null;

    const Component = modalComponents[contentType];

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[500] px-4">
            <div className="relative max-w-[500px] w-full h-fit max-h-[800px] border border-primary-900/30 
            rounded-md filters-bg-gradient overflow-y-auto custom-overflow">
                <Component
                    onClose={onClose}
                />
                <p
                    className="text-white absolute right-4 top-8 font-bold max-sm:top-5 max-sm:right-2"
                    onClick={onClose}
                >
                    <XMarkIcon
                        className="stroke-white cursor-pointer hover:stroke-gray-400 transition-all
                        duration-300 max-w-[25px] w-full max-h-[25px] h-full max-sm:max-w-[17px] max-sm:max-h-[17px]"
                    />
                </p>
            </div>
        </div>
    );
};
