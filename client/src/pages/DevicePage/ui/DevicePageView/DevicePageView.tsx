import { DevicePageDescription } from "../DevicePageDescription/DevicePageDescription";
import { DevicePageReviews } from "../DevicePageReviews/DevicePageReviews";
import { DevicePageSchema } from "../../model/types/DevicePageSchema";
import { DevicePageInfo } from "../DevicePageInfo/DevicePageInfo";

export const DevicePageView = ({
    device,
    currentUser,
    reviews,
    isOpen,
    contentType,
    closeModal,
    openModal,
    handleAddReview,
    handleDeleteReview,
}: DevicePageSchema) => {
    return (
        <div className="flex flex-col gap-[40px]">
            <div className="flex justify-around items-center gap-[50px] w-full">
                <div className="w-[400px] h-[400px] flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                        src={`${import.meta.env.VITE_API_URL}/${device?.img}`}
                        className="w-full h-full object-contain"
                        alt={device?.name}
                    />
                </div>
                <DevicePageInfo device={device} />
            </div>
            <div className="divider" />
            <div>
                <DevicePageReviews
                    contentType={contentType}
                    currentUser={currentUser}
                    reviews={reviews}
                    handleAddReview={handleAddReview}
                    handleDeleteReview={handleDeleteReview}
                    isOpen={isOpen}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            </div>
        </div>
    );
};

{
    /* <DevicePageDescription device={device} /> */
}
