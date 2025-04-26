import { BrandForm } from "./ModalForms/BrandForm";
import { TypeForm } from "./ModalForms/TypeForm";
import { DeviceForm } from "./ModalForms/DeviceForm";
import { ModalContentType } from "../model/useModal";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    contentType: ModalContentType;
}

export const Modal = ({ isOpen, onClose, contentType }: ModalProps) => {
    if (!isOpen) return null;

    const renderContent = () => {
        switch (contentType) {
            case "addBrand":
                return <BrandForm onClose={onClose} />;
            case "addType":
                return <TypeForm onClose={onClose} />;
            case "addDevice":
                return <DeviceForm onClose={onClose} />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[500]">
            <div className="relative w-[500px] max-h-[800px] border-1 border-[#5120B8]/30 rounded-md bg-[#0F0F1A]">
                {renderContent()}
                <p
                    className="text-white absolute right-4 top-8 font-bold"
                    onClick={onClose}
                >
                    X
                </p>
            </div>
        </div>
    );
};
