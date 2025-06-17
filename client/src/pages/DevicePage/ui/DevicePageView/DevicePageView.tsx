import { DevicePageReviews } from "../DevicePageReviews/DevicePageReviews";
import { DevicePageSchema } from "../../model/types/DevicePageSchema";
import { DevicePageInfo } from "../DevicePageInfo/DevicePageInfo";
import { DevicePageDescription } from "../DevicePageDescription/DevicePageDescription";

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
    dispatch,
    notifyError,
    notifySuccess,
    isFavorite,
    toggleFavorites,
}: DevicePageSchema) => {
    return (
        <div className="flex flex-col gap-10">
            <div className="relative flex flex-col lg:flex-row gap-10 bg-gradient-to-br from-[#1A1238]/30 to-[#08080e] p-8 rounded-3xl border-1 border-[#5120B8]/20 backdrop-blur-sm">
                <div className="relative w-full lg:w-[500px] h-[500px] flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1238]/50 to-[#08080e] border-1 border-[#5120B8]/20">
                    <div className="absolute inset-0 bg-[#1A1238]/5 backdrop-blur-[2px]" />
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
                            dispatch={dispatch}
                            notifyError={notifyError}
                            notifySuccess={notifySuccess}
                            isFavorite={isFavorite}
                            toggleFavorites={toggleFavorites}
                        />
                    </div>
                )}
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#5120B8]/30 to-transparent" />
            {device && <DevicePageDescription device={device} />}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#5120B8]/30 to-transparent" />
            <div className="bg-gradient-to-br from-[#1A1238]/30 to-[#08080e] rounded-3xl border-1 border-[#5120B8]/20 backdrop-blur-sm">
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
