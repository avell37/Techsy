import { DevicePageDescription } from "../DevicePageDescription/DevicePageDescription";
import { DevicePageReviews } from "../DevicePageReviews/DevicePageReviews";
import { DevicePageSchema } from "../../model/types/DevicePageSchema";

export const DevicePageView = ({
    device,
    currentUser,
    reviews,
    isOpen,
    contentType,
    closeModal,
    openModal,
    handleDeleteReview,
}: DevicePageSchema) => {
    return (
        <div className="flex flex-col gap-[40px]">
            <div className="flex justify-around border-b border-[#5120B8]/30 pb-8">
                <div className="w-[400px] h-[400px] flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                        src={`${import.meta.env.VITE_API_URL}/${device?.img}`}
                        className="w-full h-full object-contain"
                        alt={device?.name}
                    />
                </div>
                <DevicePageDescription device={device} />
            </div>
            <div>
                <DevicePageReviews
                    contentType={contentType}
                    currentUser={currentUser}
                    reviews={reviews}
                    handleDeleteReview={handleDeleteReview}
                    isOpen={isOpen}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            </div>
        </div>
    );
};
