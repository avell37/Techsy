import { DevicePageReviews } from "../DevicePageReviews/DevicePageReviews";
import { DevicePageSchema } from "../../model/types/DevicePageSchema";
import { DevicePageInfo } from "../DevicePageInfo/DevicePageInfo";
import { DevicePageDescription } from "../DevicePageDescription/DevicePageDescription";
import { Divider } from "@/shared/ui";

export const DevicePageView = ({
    device,
    currentUser,
    reviews,
    isOpen,
    contentType,
    isFavorite,
    closeModal,
    openModal,
    handleAddReview,
    handleDeleteReview,
    notifyError,
    notifySuccess,
    toggleFavorites,
}: DevicePageSchema) => {
    return (
        <div className="flex flex-col gap-10">
            <div className="relative flex flex-col lg:flex-row gap-10 card-gradient p-8 rounded-3xl primary-border backdrop-blur-sm">
                <div className="relative w-full lg:w-[500px] h-[500px] flex items-center justify-center 
                rounded-2xl overflow-hidden card-inner-gradient primary-border">
                    <div className="overlay-blur-primary" />
                    <img
                        src={`${import.meta.env.VITE_API_URL}/${device?.img}`}
                        className="relative w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
                        alt={device?.name}
                    />
                </div>
                {device && (
                    <div className="flex-1">
                        <DevicePageInfo
                            device={device}
                            isFavorite={isFavorite}
                            notifyError={notifyError}
                            notifySuccess={notifySuccess}
                            toggleFavorites={toggleFavorites}
                        />
                    </div>
                )}
            </div>
            <Divider variant="h-[1px] w-full" />
            {device && <DevicePageDescription device={device} />}
            <Divider variant="h-[1px] w-full" />
            <div className="card-gradient rounded-3xl primary-border">
                <DevicePageReviews
                    reviews={reviews}
                    currentUser={currentUser}
                    isOpen={isOpen}
                    contentType={contentType}
                    openModal={openModal}
                    closeModal={closeModal}
                    handleAddReview={handleAddReview}
                    handleDeleteReview={handleDeleteReview}
                />
            </div>
        </div>
    );
};
