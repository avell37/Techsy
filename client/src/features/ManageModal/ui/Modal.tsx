import { XMarkIcon } from "@/shared/assets/icons/XMarkIcon";
import {
    DeviceForm,
    TypeForm,
    BrandForm,
    DeleteForm,
    ReviewForm,
    ProfileForm,
} from "@features/ModalForms";
import { ModalSchema } from "../model/types/ModalSchema";

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
                return (
                    <DeleteForm
                        entityType="brand"
                        entityName="бренд"
                        onClose={onClose}
                    />
                );
            case "deleteType":
                return (
                    <DeleteForm
                        entityType="type"
                        entityName="тип"
                        onClose={onClose}
                    />
                );
            case "deleteDevice":
                return (
                    <DeleteForm
                        entityType="device"
                        entityName="устройство"
                        onClose={onClose}
                    />
                );
            case "addReview":
                return <ReviewForm onClose={onClose} />;
            case "editUsername":
                return <ProfileForm edit="username" onClose={onClose} />;
            case "editEmail":
                return <ProfileForm edit="email" onClose={onClose} />;
            case "editPassword":
                return <ProfileForm edit="password" onClose={onClose} />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[500]">
            <div className="relative w-[500px] h-fit max-h-[800px] border border-[#5120B8]/30 rounded-md filters-bg-gradient overflow-y-auto custom-overflow">
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
