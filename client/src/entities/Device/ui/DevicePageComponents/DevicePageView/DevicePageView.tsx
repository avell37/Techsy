import { DevicePageReviews } from "../DevicePageReviews/DevicePageReviews";
import { DevicePageInfo } from "../DevicePageInfo/DevicePageInfo";
import { Divider } from "@/shared/ui";
import type { DevicePageSchema } from "@/entities/Device";

export const DevicePageView = ({
    device,
    isFavorite,
    notifyError,
    notifySuccess,
    toggleFavorites,
}: DevicePageSchema) => {
    return (
        <div className="flex flex-col gap-10 mt-5">
            <div className="relative flex flex-col lg:flex-row gap-10 p-8 px-0 rounded-3xl backdrop-blur-sm max-sm:gap-6">
                <div className="relative w-full lg:w-[600px] flex items-center justify-center 
                rounded-2xl overflow-hidden bg-gradient primary-border">
                    <img
                        src={`${import.meta.env.VITE_API_URL}/uploads/${device?.img}`}
                        className="w-full h-full object-contain p-6 transition-transform duration-300"
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
            <div className="bg-gradient rounded-3xl primary-border mb-6">
                <DevicePageReviews />
            </div>
        </div>
    );
};
