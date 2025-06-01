import { XMarkIcon } from "@/shared/assets/icons/XMarkIcon";
import {
    ModalSchema,
    DeviceForm,
    TypeForm,
    BrandForm,
    DeleteForm,
    ReviewForm,
    AddressForm,
} from "@features/ManageModal";

export const Modal = ({ isOpen, onClose, contentType }: ModalSchema) => {
    if (!isOpen) return null;

    const renderContent = () => {
        switch (contentType) {
            case "addBrand":
                return <BrandForm onClose={onClose} />;
            case "addType":
                return <TypeForm onClose={onClose} />;
            case "addDevice":
                return <DeviceForm onClose={onClose} />;
            case "deleteBrand":
                return <DeleteForm entityType="brand" onClose={onClose} />;
            case "deleteType":
                return <DeleteForm entityType="type" onClose={onClose} />;
            case "deleteDevice":
                return <DeleteForm entityType="device" onClose={onClose} />;
            case "addReview":
                return <ReviewForm onClose={onClose} />;
            case "manageAddress":
                return <AddressForm onClose={onClose} />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[500]">
            <div className="relative w-[500px] h-fit max-h-[800px] border border-[#5120B8]/30 rounded-md bg-[#0F0F1A] overflow-y-auto custom-overflow">
                {renderContent()}
                <p
                    className="text-white absolute right-4 top-8 font-bold"
                    onClick={onClose}
                >
                    <XMarkIcon
                        width="25px"
                        height="25px"
                        className="stroke-[#fff]"
                    />
                </p>
            </div>
        </div>
    );
};
